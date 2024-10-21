import {GetRenderer, RenderDefn} from "./simple.renderers";


export type LensFieldProps<T> = {
    path: string
    id: string
    getRenderer: GetRenderer
    renderInput: RenderDefn
}

export const LensField = <T, >(props: LensFieldProps<T>) => {
    const {id, getRenderer, renderInput} = props;
    return (
        <div><label htmlFor={id}>{id}</label>{getRenderer(renderInput)(props)}</div>
    )
}