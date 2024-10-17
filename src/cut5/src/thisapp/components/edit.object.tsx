import {CountryToObjectDef} from "../country/all.countries";
import {useComponents} from "../../generic/hooks/use.component";
import {useObjectDefnsInCountry} from "../country/useObjectDefnsInCountry";
import {mapKeys} from "../../generic/utils/utils";

export interface RenderObjectProps<Type extends string, T> {
    initialValue: Partial<T>;
}

export const editObject = <Type extends string, T>(defns: CountryToObjectDef<Type>, type: Type) =>
    ({initialValue}: RenderObjectProps<Type, T>): JSX.Element => {
        const {EditField, FieldContainer, value} = useComponents<T>(initialValue);
        const defn = useObjectDefnsInCountry(defns, type);
        return <FieldContainer>{mapKeys(defn, key =>
            <EditField id={key} renderer={defn[key]}/>)}
        </FieldContainer>
    };