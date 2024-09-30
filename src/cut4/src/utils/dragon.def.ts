import {GenericData, ObjectDef} from "../render/RenderObject";
import {Dragon} from "../domain/Dragon";

export const dragonObjDef: ObjectDef<Dragon> = {
    body: {
        type: "group",
        defn: {
            chest: {
                type: "group",
                defn: {
                    stomach: 'text',
                    hitpoints: 'text'
                }
            },
            leftWing: {
                type: "group",
                defn: {
                    hitpoints: 'text'
                }
            },
            rightWing: {
                type: "group",
                defn: {
                    hitpoints: 'text'
                }
            }
        }
    },
    head: {
        type: "group",
        defn: {
            leftEye: {
                type: "group",
                defn: {
                    color: {
                        type: "dropdown",
                        options: ['blue', 'green'] // Dropdown for eye color
                    }
                }
            },
            rightEye: {
                type: "group",
                defn: {
                    color: {
                        type: "dropdown",
                        options: ['blue', 'green'] // Dropdown for eye color
                    }
                }
            },
            hitpoints: 'text'
        }
    }
};

// Pass the updated `dragonObjDef` to the render function.
export const dragonProp: GenericData<Dragon> = {
    defn: dragonObjDef,
    value: {
        body: {
            chest: {
                stomach: {
                    contents: []
                },
                hitpoints: ""

            },
            leftWing: {
                hitpoints: ''
            },
            rightWing: {
                hitpoints: ''
            }
        },
        head: {
            leftEye: {
                color: ''
            },
            rightEye: {
                color: ''
            },
            hitpoints: ''
        },
    },
    // Ensure initial value structure matches the nested definition
};