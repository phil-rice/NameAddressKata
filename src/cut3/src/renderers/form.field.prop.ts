import {fieldInputs, GetRenderer, RenderDef} from "./simpleImpl/simple.renderers";

export interface FormFieldProps<T> {
    fieldInputs: fieldInputs<T>
    getRenderer: GetRenderer
    renderInput: RenderDef
}
