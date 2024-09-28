import {Country, useCountry} from "./country/country";
import {useState} from "react";
import {useComponents} from "../hooks/use.component";
import {mapKeys} from "../utils/utils";
import {RenderDef} from "./simpleImpl/simple.renderers";
import {SimpleFormContainer} from "./simpleImpl/simple.form.container";

/**
 * These type is used to map each key of an interface / structure that we pass,
 * like Name or Address to a type of RenderDef, in our case ("text", or {type: "dropdown", options:Options[]}
 */
export type ObjectDef<T> = Partial<Record<keyof T, RenderDef>>;
/**
 * This type works hand in hand with the ValidTypes defined in cut4 that can be as value either
 * 'name' or 'address'. These type has a map of the ValidType to the key of either Name and Address at which
 * they in turn point to a RenderDef
 */
export type TypeToObjectDef<T extends string> = Record<T, ObjectDef<any>>;
/**
 * The same idea as before, but these ony uses as keys the Country (custom type that accepts
 * 'uk', 'ch' or 'cn' at the moment
 */
export type CountryToObjectDef<T extends string> = Partial<Record<Country, TypeToObjectDef<T>>>
/**
 * From what I understand these fucker is used to provide the initial state to the
 * useState hook (if there is any)
 */
export type RenderObjectProps<Type extends string, T> = {
    value?: T;
}
/**
 * this one is responsible for bringing everything together. It's a high order function (the first function,
 * which has the name renderObject, return another function, and the second function is responsible for
 * rendering the JSX element
 */
export const renderObject = <Type extends string, T>(defns: CountryToObjectDef<Type>, type: Type) =>
    ({value}: RenderObjectProps<Type, T>): JSX.Element => {
        /**
         * Get the current country from context (if there is none given, uses the default
         * , countries[0] aka 'uk'
         */
        const country = useCountry();
        /**
         * the form data, returned from the useState hook.
         * The initial data is either the value parsed or empty object otherwise
         */
        const [obj, setObj] = useState<Partial<T>>(value || {});
        /**
         * Using the custom hook useComponents from cut3, we return the Field function
         */
        const {Field} = useComponents(obj, setObj);
        /**
         * because we know that the key to the defns is a country type, we can
         * get its value by  using the country as an index.
         * The value is of type TypeToObjectDefn
         */
        const byCountry = defns[country];
        if (!byCountry)
            throw new Error(`No definition for country ${country}`);
        /**
         * we give a type as a parameter to the function call. We consider this type to have the possible
         * values of ValidTypes ('name' or 'address'). Based on it as a key for TypeToObjectDef,
         * we extract the value, that ObjectDef
         */
        const defn: ObjectDef<T> = byCountry[type]; // Get definitions for the specified type
        if (!defn)
            throw new Error(`No definition for type ${type} in country ${country}`);

        return (
            <SimpleFormContainer>
                {mapKeys(defn, key => <Field id={key} renderer={defn[key]}/>)}
            </SimpleFormContainer>
        )
    };

export type GenericData<T, > = {
    defn: ObjectDef<T>;
    value: T
}

export const renderGenericObject = <T, >(prop: GenericData<T>) => {

    const {value, defn} = prop;
    const [obj, setObj] = useState<Partial<T>>(value || {});
    const {Field} = useComponents(obj, setObj);

    if (!defn)
        throw new Error(`No definitions provided for object`);
    return (
        <SimpleFormContainer>
            {mapKeys(defn, (key) => (
                <Field id={key} renderer={defn[key]}/>
            ))}
        </SimpleFormContainer>
    );
};
