import React from 'react';
import {GenericData} from "../RenderObject";
import {LensAndPath, LensBuilder} from "../../utils/lens";  // Import lensBuilder
import {SimpleFormContainer} from "../simpleImpl/simple.form.container";
import {mapKeys} from "../../utils/utils";
import {FieldWithLens} from "./file.with.lense";
import {RenderDef} from "../simpleImpl/simple.renderers";

export const renderGenericObjectWithLens = <T, >(
    prop: GenericData<T>,
    lens: LensAndPath<any, T>,  // Take the basic lens as input
    obj: any,
    setObj: (o: any) => void
) => {
    const {defn} = prop;
    if (!defn) {
        throw new Error('No definitions provided for object');
    }

    // Convert the basic lens into a LensBuilder for using focusOn
    const lensBuilderInstance = new LensBuilder(lens);

    return (
        <SimpleFormContainer>
            {mapKeys(defn, (key) => {
                const rendererDef = defn[key];

                // Use the LensBuilder to focus on the current property
                const focusedLens = lensBuilderInstance.focusOn(key).build();

                if (typeof rendererDef === 'object' && rendererDef.type === 'group') {
                    return (
                        <div key={key as string}>
                            <h3>{key as string}</h3>
                            {renderGenericObjectWithLens(
                                {
                                    defn: rendererDef.defn,
                                },
                                focusedLens,  // Pass the focused lens
                                obj,
                                setObj
                            )}
                        </div>
                    );
                } else {
                    return (
                        <FieldWithLens
                            key={key as string}
                            id={key}
                            renderer={rendererDef as RenderDef}
                            lens={focusedLens}  // Pass the focused lens
                            obj={obj}
                            setObj={setObj}
                        />
                    );
                }
            })}
        </SimpleFormContainer>
    );
};
