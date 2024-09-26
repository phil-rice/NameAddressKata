import {CountryToObjectDef} from "../RenderObject";
import {ValidTypes} from "../../domain/ValidTypes";
import {ukAddress, ukName} from "./uk";
import {chAddress, chName} from "./sw";

export const countryDetails: CountryToObjectDef<ValidTypes> = {
    uk: {name: ukName, address: ukAddress},
    ch: {name: chName, address: chAddress}
}