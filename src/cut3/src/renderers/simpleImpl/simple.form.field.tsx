import {FormFieldProps} from "../form.field.prop";

export const SimpleFormField = <T, >(props: FormFieldProps<T>) => {

    const {fieldInputs, getRenderer, renderInput} = props;

    return (
        <div>
            <label>{String(fieldInputs.id)}</label>
            {getRenderer(renderInput)(fieldInputs)}
        </div>
    )
}