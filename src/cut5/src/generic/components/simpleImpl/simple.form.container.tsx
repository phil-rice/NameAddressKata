import {FormFieldContainerProps} from "../../hooks/use.component";

export const SimpleFormContainer = ({children}: FormFieldContainerProps) => {
    return <form>{children}</form>
}