import React, {useState} from "react";
import {initialName, Name} from "../domain/name";
import {SimpleFormContainer} from "../renderers/simpleImpl/simple.form.container";
import {SimpleFormField} from "../renderers/simpleImpl/simple.form.field";
import {fieldInputs, getRender} from "../renderers/simpleImpl/simple.renderers";

export const titleOptions = [
    "Mr",
    "Mrs",
    "Dr",
    "Prof",
    "Jmeker"
]

export const NameForm = () => {
    const [formData, setFormData] = useState<Name>(initialName);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const titletNameInput: fieldInputs<Name> = {
        id: "title",
        value: formData,
        onChange: handleChange
    }
    const firstNameInput: fieldInputs<Name> = {
        id: "firstName",
        value: formData,
        onChange: handleChange
    }
    const lastNameInput: fieldInputs<Name> = {
        id: "lastName",
        value: formData,
        onChange: handleChange
    }

    return (
        <SimpleFormContainer>
            <SimpleFormField<Name> fieldInputs={titletNameInput} getRenderer={getRender}
                                   renderInput={{type: "dropdown", options: titleOptions}}/>
            <SimpleFormField<Name> fieldInputs={firstNameInput} getRenderer={getRender} renderInput="text"/>
            <SimpleFormField<Name> fieldInputs={lastNameInput} getRenderer={getRender} renderInput="text"/>
        </SimpleFormContainer>
    )
}