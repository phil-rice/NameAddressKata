import {renderObject} from "../render/RenderObject";
import {countryDetails} from "../render/country/all.countries";

export const AddressForm = renderObject(countryDetails, "address")