import {renderGenericObject} from "../render/RenderObject";
import {Dragon} from "../domain/Dragon";
import {lensBuilder} from "../utils/lens";
import {dragonProp} from "../utils/dragon.def";

const sharpnessLvl = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
];
const dragonLens = lensBuilder<Dragon>();
const bodyLens = dragonLens.focusOn("body");
const chestLens = bodyLens.focusOn("chest");
const stomachLens = chestLens.focusOn("stomach");
const leftEyeLens = dragonLens.focusOn("head").focusOn("leftEye");
const rightEyeLens = dragonLens.focusOn("head").focusOn("rightEye");


// Render the DragonForm with nested Claws inputs.
export const DragonForm = () => {
    return renderGenericObject(dragonProp);
};
