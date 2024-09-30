import React from 'react';
import {getRender, RenderDef} from "../simpleImpl/simple.renderers";
import {LensAndPath} from "../../utils/lens";


interface FieldWithLensProps<T> {
    id: keyof T;
    renderer: RenderDef;
    lens: LensAndPath<any, any>;
    obj: any;
    setObj: (o: any) => void;
}

export const FieldWithLens = <T, >(props: FieldWithLensProps<T>) => {
    const {id, renderer, lens, obj, setObj} = props;
    const fieldValue = lens.get(obj);
    const handleChange = (newValue: any) => {
        const updatedObj = lens.set(obj, newValue);
        setObj(updatedObj);
    };

    const fieldRenderer = getRender(renderer);
    const fieldInputs = {
        id: id,
        value: fieldValue,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const newValue = e.target.value;
            handleChange(newValue);
        },
    };

    return (
        <div key={id as string}>
            <label htmlFor={id as string}>{id as string}</label>
            {fieldRenderer(fieldInputs)}
        </div>
    );
};