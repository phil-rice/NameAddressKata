export interface Address {
    houseNumber: string;
    street: string;
    town: string;
    city: string;
    county: string;
    country: string;
    rusky: string
}

export const emptyAddress: Address = {
    houseNumber: '',
    street: '',
    town: '',
    city: '',
    county: '',
    country: '',
    rusky: ""
}