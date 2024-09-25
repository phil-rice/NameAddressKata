/**
 * Right now we have defined in our project the FormContainer and the 2 functions
 * that are used to create a <input type="text"> field and a <select> field
 *
 * The only thing that remains is to define a structure that receives one of those functions
 * and return the input that it renders, based on the function it receives.
 */
import React from "react";

export interface FormFieldProp<T> {
    id: keyof T,
    value: T,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;

    /**
     * aici precizez doar structura, adica o acest FormFieldProp are o proprietate numita renderInput ce este o functie
     * ce primeste acei parametrii si returneaza un react element.
     */
    renderInput: (id: keyof T,
                  value: T,
                  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    ) => JSX.Element
}

/**
 * so we pass to the FormField the T, in our case either Name or Address
 * and the 4 parameters(is we want an input field) or 5 if we want a select.
 *
 * The FormField will generate the appropriate html input based on the values that renderInput receives.
 */
export const FormField = <T, >(props: FormFieldProp<T>) => {

    // here we deconstruct
    const {id, value, onChange, renderInput} = props;

    return (
        <div>
            <label htmlFor={id as string}>{id as string}</label>
            {renderInput(id, value, onChange)}
        </div>
    )
}