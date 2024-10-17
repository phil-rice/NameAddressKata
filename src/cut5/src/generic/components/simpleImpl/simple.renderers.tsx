import React from "react";
import {lensFromPath} from "../../optics/optics";


export type FieldRendererProps<T> = {
    id: string
    value: Partial<T>
    onChanged: (value: Partial<T>) => void
}

export type FieldRenderer = <T, >(fieldInputs: FieldRendererProps<T>) => JSX.Element


export const RenderStringInput: FieldRenderer = <T, >
(
    fieldInputs: FieldRendererProps<T>
) => {
    const {id, value, onChanged} = fieldInputs
    const lens = lensFromPath<T>(id)
    let initialState = lens.get(value);
    const [text, setText] = React.useState(initialState);

    function onChange() {
        return onChanged(lens.set(value, text));
    }

    return (
        <input
            type="text"
            id={id as string}
            name={id as string}
            value={text}
            onChange={e => setText(e.target.value)}
            onBlur={onChange}
            onKeyDown={e => {
                if (e.key === 'Enter')
                    onChange()
            }}
        />
    );
};

export const renderDropDown = (options: string[]): FieldRenderer => <T, >(
    fieldInputs: FieldRendererProps<T>
) => {
    const {id, value, onChanged} = fieldInputs
    const lens = lensFromPath<T>(id)
    return (
        <select
            id={id as string}
            name={id as string}
            value={lens.get(value)}
            onChange={e => onChanged(lens.set(value, e.target.value))}
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


export type RenderDefn = "text" | { type: "dropdown"; options: string[] }


export type GetRenderer = (render: RenderDefn) => FieldRenderer;

export const getRender = (renderDef: RenderDefn) => {
    if (renderDef === "text") return RenderStringInput;
    if (typeof renderDef === "object" && renderDef.type === "dropdown") return renderDropDown(renderDef.options);
    throw new Error("Unsupported RenderDef type");
}
