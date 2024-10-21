import {SimpleFormContainer} from "./simple.form.container";
import {getRender} from "./simple.renderers";
import React from "react";
import {FieldComponentsProp, SimpleComponentsMaker} from "../../hooks/use.component";

export const EditField = <T, >() => (props: FieldComponentsProp) => {
    const {id, path,
        renderer = 'text'} = props;
    return <div><label htmlFor={id}>{id}</label>{getRender(renderer)({path, id})}</div>
};

export const SimpleFieldComponents: SimpleComponentsMaker = <T, >() => {
    return {
        FieldContainer: ({children}) =>
            <SimpleFormContainer>{children}</SimpleFormContainer>,
        EditField: EditField(),
    }
}