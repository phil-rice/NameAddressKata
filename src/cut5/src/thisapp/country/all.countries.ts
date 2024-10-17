import {ValidTypes} from "../domain/ValidTypes";
import {ukAddress, ukName} from "./uk";
import {chAddress, chName} from "./sw";
import {Country} from "./country";
import {ObjectDef} from "../../generic/components/object.defns";


export type TypeToObjectDef<T extends string> = Record<T, ObjectDef>;

export type CountryToObjectDef<T extends string> = Partial<Record<Country, TypeToObjectDef<T>>>

export const countryDetails: CountryToObjectDef<ValidTypes> = {
    uk: {name: ukName, address: ukAddress},
    ch: {name: chName, address: chAddress}
}