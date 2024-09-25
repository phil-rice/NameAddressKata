import React, {useState} from "react";
import {Address, initialAddress} from "../domain/address";
import {FormContainer} from "../renders/form.container";
import {FormField} from "../renders/FormField";
import {renderDropDown, renderStringInput} from "../renders/field.render";

const countryOptions = [
    "UK",
    "China",
    "USA",
    "France"
];

export const AddressForm = () => {

    const [formData, setFormData] = useState<Address>(initialAddress);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <FormContainer>
            <FormField<Address>
                id="country"
                value={formData}
                onChange={handleChange}
                renderInput={renderDropDown(countryOptions)}/>

            <FormField<Address>
                id="houseNumber"
                value={formData}
                onChange={handleChange}
                renderInput={renderStringInput}/>

            <FormField<Address>
                id="street"
                value={formData}
                onChange={handleChange}
                renderInput={renderStringInput}/>

            <FormField<Address>
                id="town"
                value={formData}
                onChange={handleChange}
                renderInput={renderStringInput}/>

            <FormField<Address>
                id="city"
                value={formData}
                onChange={handleChange}
                renderInput={renderStringInput}/>

            <FormField<Address>
                id="county"
                value={formData}
                onChange={handleChange}
                renderInput={renderStringInput}/>
        </FormContainer>
    )
}