import React from "react";

/**
 * so here what we have is just a type function that renders an input of type text
 * by using the values of T that is passed. Since it receives a T and the prop
 * of the input that is generated used values of T, this means that we have type enforcing.
 *
 * For example, if we were to have something like this renderStringInput<Name>, this means
 * that our parameters that we have to give, the id and value, must follow the Name interface.
 *
 * This means that id can only be the prop of Name, in our case (title, firstName and lastName).
 * Any other value will throw a compile error!
 */
export const renderStringInput = <T, >(
    id: keyof T,
    value: T,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => {
    return (
        <input
            type="text"
            id={id as string}
            name={id as string}
            value={value[id] as string}  // here if we had passed {value}, React would have thrown an error.
            onChange={onChange}
        />
    )
};
/**
 * Very similar to renderString. These one receives a new parameter, an array of strings
 * that represent the values of the dropdown.
 */
export const renderDropDown = (options: string[]) => <T, >(
    id: keyof T,
    value: T,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
) => {
    /**
     * The options.map() is what makes it dynamically render our options based on the string[]
     * that it receives as a parameter.
     */
    return (
        <select
            id={id as string}
            name={id as string}
            value={value[id] as string}
            onChange={onChange}
        >
            <option value="">Select {id as string}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}