import React from "react";
import {appendPath, lensFromPath} from "../../optics/optics";
import {useStateOps} from "../../../index";


export type FieldRendererProps<T> = {
    path: string
    id: string
}

export type FieldRenderer = <T, >(fieldInputs: FieldRendererProps<T>) => JSX.Element


export const RenderStringInput: FieldRenderer = <T, >
(
    fieldInputs: FieldRendererProps<T>
) => {
    const {path, id} = fieldInputs
    const [state, setValue] = useStateOps<T>()
    const lens = lensFromPath<T>(appendPath(path,id))
    let initialState = lens.get(state);
    const [text, setText] = React.useState(initialState);

    function onChange() {
        return setValue(path, id, text)
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
                if (e.key === 'Enter') onChange()
            }}
        />
    );
};

export const renderDropDown = (options: string[]): FieldRenderer => <T, >(
    fieldInputs: FieldRendererProps<T>
) => {
    const [state, setValue] = useStateOps<T>()
    const {path, id} = fieldInputs
    const lens = lensFromPath<T>(appendPath(path,id));
    return (
        <select
            id={id as string}
            name={id as string}
            value={lens.get(state)}
            onChange={e => setValue(path, id, e.target.value)}
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
