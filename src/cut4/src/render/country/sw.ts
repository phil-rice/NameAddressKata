import {ObjectDef} from "../RenderObject";
import {Name} from "../../domain/Name";
import {Address} from "../../domain/Address";
import {countries} from "./country";

export const chName: ObjectDef<Name> = {
    title: {type: 'dropdown', options: ['Herr', 'Frau', 'Dr', 'Prof']},
    firstName: 'text',
    surnamePrefix: 'text',
    lastName: 'text',
}
export const chAddress: ObjectDef<Address> = {
    houseNumber: 'text',
    street: 'text',
    town: 'text',
    city: 'text',
    county: 'text',
    country: {type: 'dropdown', options: countries},
}