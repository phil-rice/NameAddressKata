import {ObjectDef} from "../RenderObject";
import {Name} from "../../domain/Name";
import {Address} from "../../domain/Address";
import {countries} from "./country";

const titleOptions = ['Mr', 'Ms', 'Mrs', 'Dr', 'Prof'];
export const ukName: ObjectDef<Name> = {
    title: {type: 'dropdown', options: titleOptions},
    firstName: 'text',
    lastName: 'text'
}

export const ukAddress: ObjectDef<Address> = {
    houseNumber: 'text',
    street: 'text',
    town: 'text',
    city: 'text',
    county: 'text',
    country: {type: 'dropdown', options: countries}
}