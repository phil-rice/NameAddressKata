import {FieldComponentsFn, FieldComponentsProp} from "../renderers/fieldImpl/field.components";
import {getRender} from "../renderers/simpleImpl/simple.renderers";
import {SimpleFormContainer} from "../renderers/simpleImpl/simple.form.container";
import {SimpleFormField} from "../renderers/simpleImpl/simple.form.field";
import React from "react";

export const useComponents: FieldComponentsFn = <T, >(formData: T, setFormData: (t: T) => void) => {

    /**
     * we don't use here the useState hook because we need to pass the formData and setFormData as params,
     * and we do it from the NameForm or AddressForm or ce altceva mai avem
     */

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    return {
        getRenderer: getRender,
        Field: (prop: FieldComponentsProp<T>) => {

            const {id, renderer} = prop
            const fieldInputs = {
                id: id,
                value: formData,
                onChange: handleChange
            }
            return (
                <SimpleFormField<T> fieldInputs={fieldInputs} getRenderer={getRender} renderInput={renderer}/>
            );
        },
        FieldContainer: SimpleFormContainer
    }
}