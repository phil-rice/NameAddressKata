import {countries} from "./country";
import {ObjectDef} from "../../generic/components/object.defns";

export const chName: ObjectDef = {
    title: {type: 'dropdown', options: ['Herr', 'Frau', 'Dr', 'Prof']},
    firstName: 'text',
    surnamePrefix: 'text',
    lastName: 'text',
}
export const chAddress: ObjectDef = {
    houseNumber: 'text',
    street: 'text',
    town: 'text',
    city: 'text',
    county: 'text',
    country: {type: 'dropdown', options: countries},
}