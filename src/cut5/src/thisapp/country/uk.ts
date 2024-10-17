import {ObjectDef} from "../../generic/components/object.defns";
import {countries} from "./country";

const titleOptions = ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof'];
export const ukName: ObjectDef = {
    title: {type: 'dropdown', options: titleOptions},
    firstName: 'text',
    lastName: 'text'
}

export const ukAddress: ObjectDef = {
    houseNumber: 'text',
    street: 'text',
    town: 'text',
    city: 'text',
    county: 'text',
    country: {type: 'dropdown', options: countries}
}