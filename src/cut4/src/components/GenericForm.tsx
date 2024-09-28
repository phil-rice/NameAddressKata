import {renderGenericObject} from "../render/RenderObject";
import {ukName} from "../render/country/uk";
import {chName} from "../render/country/sw";


const propChName = {
    defn: chName, // Pass any object definitions here
    value: {firstName: "", lastName: "", title: "", surnamePrefix: "CHHHH"} // Example initial values
}
export const GenericNameForm = () => {
    return renderGenericObject(propChName);
};