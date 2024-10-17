import {GetRenderer, RenderDefn} from "./simple.renderers";


export type LensFieldProps<T> = {
    id: string
    getRenderer: GetRenderer
    renderInput: RenderDefn
    value: Partial<T>
    onChanged: (t: Partial<T>) => void
}

export const LensField = <T, >(props: LensFieldProps<T>) => {
    const {id, getRenderer, renderInput} = props;
    return (
        <div><label htmlFor={id}>{id}</label>{getRenderer(renderInput)(props)}</div>
    )
}