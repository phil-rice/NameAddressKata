import {useCountry} from "./country";
import {ObjectDef} from "../../generic/components/object.defns";
import {CountryToObjectDef} from "./all.countries";

export function useObjectDefnsInCountry<Type extends string>(defns: CountryToObjectDef<Type>, type: Type) {
    const country = useCountry();
    const byCountry = defns[country];
    if (!byCountry) throw new Error(`No definition for country ${country}`);
    const defn: ObjectDef = byCountry[type]; // Get definitions for the specified type
    if (!defn) throw new Error(`No definition for type ${type} in country ${country}`);
    return defn;
}