import {renderObject} from "../render/RenderObject";
import {countryDetails} from "../render/country/all.countries";


export const NameForm =
    renderObject(countryDetails, "name")
