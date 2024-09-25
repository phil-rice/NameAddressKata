import React, {useState} from "react";
import {initialName, Name} from "../domain/name";
import {FormContainer} from "../renders/form.container";
import {FormField} from "../renders/FormField";
import {renderDropDown, renderStringInput} from "../renders/field.render";

const titleOptions = [
    "Mr",
    "Mrs",
    "Dr",
    "Prof"
];

export const NameForm = () => {

    const [formData, setFormData] = useState<Name>(initialName);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <FormContainer>
            <FormField<Name>
                id="title"
                value={formData}
                onChange={handleChange}
                renderInput={renderDropDown(titleOptions)}/>
            <FormField<Name>
                id="firstName"
                value={formData}
                onChange={handleChange}
                renderInput={renderStringInput}/>
            <FormField<Name>
                id="lastName"
                value={formData}
                onChange={handleChange}
                renderInput={renderStringInput}/>
        </FormContainer>
    )
}