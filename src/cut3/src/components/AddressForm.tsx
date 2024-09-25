import {useState} from "react";
import {Address, emptyAddress} from "../domain/address";
import {useComponents} from "../hooks/use.component.hook";

export const countryOptions = [
    "UK",
    "USA",
    "CHA",
    "JPN",
    "FRA"
]

export const AddressForm = () => {

    const [formData, setFormData] = useState<Address>(emptyAddress);

    const {Field, FieldContainer} = useComponents(formData, setFormData);

    return (
        <FieldContainer>
            <Field id="country" renderer={{type: "dropdown", options: countryOptions}}/>
            <Field id="houseNumber" renderer={"text"}/>
            <Field id="street" renderer={"text"}/>
            <Field id="town" renderer={"text"}/>
            <Field id="city" renderer={"text"}/>
            <Field id="county" renderer={"text"}/>
            <Field id="rusky" renderer={"text"}/>
        </FieldContainer>
    )
}