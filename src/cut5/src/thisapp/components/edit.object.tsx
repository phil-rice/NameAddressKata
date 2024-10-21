import {CountryToObjectDef} from "../country/all.countries";
import {useComponents} from "../../generic/hooks/use.component";
import {useObjectDefnsInCountry} from "../country/useObjectDefnsInCountry";
import {mapKeys} from "../../generic/utils/utils";

export interface RenderObjectProps<Type extends string, T> {
    path: string
}

export const editObject = <Type extends string, T>(defns: CountryToObjectDef<Type>, type: Type) =>
    ({path}: RenderObjectProps<Type, T>): JSX.Element => {
        const {EditField, FieldContainer} = useComponents<T>(path);
        const defn = useObjectDefnsInCountry(defns, type);
        return <FieldContainer>{mapKeys(defn, key =>
            <EditField path={path} id={key} renderer={defn[key]}/>)}
        </FieldContainer>
    };