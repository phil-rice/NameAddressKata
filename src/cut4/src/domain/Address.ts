import {Country} from "../render/country/country";

export interface Address {
    houseNumber: string;
    street: string;
    town: string;
    city: string;
    county: string;
    country: Country;
    "国家": string;
    "省": string;
    "市": string;
    "区": string;
    "街道": string;
    "建筑号": string;
    "单元": string;
    "公寓号": string;
}
