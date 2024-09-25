import {useState} from "react";
import {Address, emptyAddress} from "../domain/address";
import {useComponents} from "../hooks/use.component.hook";
import {SimpleFormContainer} from "../renderers/simpleImpl/simple.form.container";

export const countryOptions = [
    "UK",
    "USA",
    "CHA",
    "JPN",
    "FRA"
]

export const AddressForm = () => {

    const [formData, setFormData] = useState<Address>(emptyAddress);

    const {Field} = useComponents(formData, setFormData);

    return (
        <SimpleFormContainer>
            <Field id="country" renderer={{type: "dropdown", options: countryOptions}}/>
            <Field id="houseNumber"/>
            <Field id="street"/>
            <Field id="town"/>
            <Field id="city"/>
            <Field id="county"/>
            <Field id="rusky"/>
        </SimpleFormContainer>
    )
}