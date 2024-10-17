import {SimpleFormContainer} from "./simple.form.container";
import {getRender} from "./simple.renderers";
import React from "react";
import {FieldComponentsProp, SimpleComponentsMaker} from "../../hooks/use.component";

export const EditField = <T, >(value: Partial<T>, setValue: (t: Partial<T>) => void) => (props: FieldComponentsProp) => {
    const {id, renderer = 'text'} = props;
    return <div><label htmlFor={id}>{id}</label>{getRender(renderer)({id, value, onChanged: setValue})}</div>
};

export const SimpleFieldComponents: SimpleComponentsMaker = <T, >(value: Partial<T>, setValue: (t: Partial<T>) => void) => {
    return {
        value, setValue,
        FieldContainer: ({children}) =>
            <SimpleFormContainer>{children}</SimpleFormContainer>,
        EditField: EditField(value, setValue),
    }
}