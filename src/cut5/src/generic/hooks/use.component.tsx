import React, {ReactNode} from "react";
import {RenderDefn} from "../components/simpleImpl/simple.renderers";
import {SetFn, useStateOps} from "../../index";
import {LensEvent} from "../events/events";

export interface FormFieldContainerProps {
    children: React.ReactNode;
}

export type FieldComponentsProp = {
    path: string
    id: string,
    renderer?: RenderDefn
};

export type FieldComponents<T> = {
    FieldContainer: React.FC<FormFieldContainerProps>
    EditField: React.FC<FieldComponentsProp>
}
export type SimpleComponentsMaker = <T>(path: string,formData: Partial<T>, setValue: SetFn) => FieldComponents<T>

export const SimpleComponentsContext = React.createContext<SimpleComponentsMaker | undefined>(undefined);

export const SimpleComponentsProvider: React.FC<{ value: SimpleComponentsMaker, children: ReactNode }> =
    ({value, children}) =>
        <SimpleComponentsContext.Provider value={value}>{children}</SimpleComponentsContext.Provider>

export const useComponents = <T, >(path: string): FieldComponents<T> => {
    const [state,setEvent] =useStateOps<T>()
    const components = React.useContext(SimpleComponentsContext);
    if (!components) throw new Error("No SimpleComponentsProvider available");
    return components?.(path,state, setEvent);
}

