import React from "react";

/**
 * a custom type for the input fields that keep repeating
 */
export type fieldInputs<T, > = {
    id: keyof T,
    value: T,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
/**
 * We create a type for the functions that render our input fields, regardless of the type.
 * So these type describes a function that takes fieldInputs type as a parameter
 * and returns a JSX.
 *
 * The way it is written, FieldRenderer isn't generic itself. That (<T> (... means
 * that we specify the type only when calling the function.
 */
export type FieldRenderer = <T, >(
    fieldInputs: fieldInputs<T>
) => JSX.Element

/**
 * an implementation of FieldRenderer that renders a text input
 */
export const renderStringInput: FieldRenderer = <T, >
(
    fieldInputs: fieldInputs<T>
) => {
    const {id, value, onChange} = fieldInputs
    return (
        <input
            type="text"
            id={id as string}
            name={id as string}
            value={value[id] as string}
            onChange={onChange}
        />
    )
};
/**
 * an implementation of FieldRenderer that renders a select input
 */
export const renderDropDown = (options: string[]): FieldRenderer => <T, >(
    fieldInputs: fieldInputs<T>
) => {
    const {id, value, onChange} = fieldInputs
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
/**
 * The following 2 types are added compared to cut2 for making the code much
 * cleaner for once but also to introduce the concept of data driven in our code.
 */
export type RenderDef = 'text' | { type: 'dropdown', options: string[] };
export type GetRenderer = (render: RenderDef) => FieldRenderer;

export const getRender: GetRenderer = (render: RenderDef) => {
    if (render === 'text') {
        return renderStringInput;
    } else {
        return renderDropDown(render.options);
    }
};
