import {FormFieldContainerProps} from "../form.container.props";
import React from "react";

/**
 * Very simple, just like the FormContainer in cut2
 */
export const SimpleFormContainer: React.FC<FormFieldContainerProps> = ({children}) => {
    return (
        <form>
            {children}
        </form>
    )
}