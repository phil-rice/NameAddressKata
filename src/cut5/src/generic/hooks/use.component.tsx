import React, {ReactNode, useState} from "react";
import {RenderDefn} from "../components/simpleImpl/simple.renderers";

export interface FormFieldContainerProps {
    children: React.ReactNode;
}

export type FieldComponentsProp = {
    id: string,
    renderer?: RenderDefn
};

export type FieldComponents<T> = {
    value: Partial<T>
    setValue: (t: Partial<T>) => void
    FieldContainer: React.FC<FormFieldContainerProps>
    EditField: React.FC<FieldComponentsProp>
}
export type SimpleComponentsMaker = <T>(formData: Partial<T>, setFormData: (t: Partial<T>) => void) => FieldComponents<T>

export const SimpleComponentsContext = React.createContext<SimpleComponentsMaker | undefined>(undefined);

export const SimpleComponentsProvider: React.FC<{ value: SimpleComponentsMaker, children: ReactNode }> =
    ({value, children}) =>
        <SimpleComponentsContext.Provider value={value}>{children}</SimpleComponentsContext.Provider>

export const useComponents = <T, >(initialValue: Partial<T> | undefined): FieldComponents<T> => {
    const components = React.useContext(SimpleComponentsContext);
    if (!components) throw new Error("No SimpleComponentsProvider available");
    const [value, setValue] = useState<Partial<T>>(initialValue || {});
    return components(value, setValue);
}

