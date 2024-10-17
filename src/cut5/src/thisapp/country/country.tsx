import React from "react";

export type Country = 'uk' | 'ch' | 'cn';

export const countries: Country[] = [
    'uk', 'ch', 'cn'
];

export function isCountry(country: string): boolean {
    return countries.includes(country as Country);
}

export const countryContext = React.createContext<Country>(countries[0]);

export type CountryProviderProp = {
    children: React.ReactNode;
    country?: Country;
};

/**
 * This is the function / tag that will encapsulate the NameForm
 * or the AddressForm or any other form.
 *
 * Because of this function, the fields of the form will render based on
 * the country is selected.
 */
export function CountryProvider(prop: CountryProviderProp) {
    const {children, country = countries[0]} = prop;
    return (
        <countryContext.Provider value={country}>
            {children}
        </countryContext.Provider>
    );
}
/**
 * Here we declare a custom hook called useCountry,
 * that access the value stored in countryContext. (by default the valued is set to 'uk')
 */

/**
 * Inside a React component, you can call useCountry() to get the current country.
 * This removes the need to manually pass the country prop down the component tree. !!!
 */
export function useCountry() {
    return React.useContext(countryContext)
}