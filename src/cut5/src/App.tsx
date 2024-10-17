import React from 'react';
import './App.css';
import {NameForm} from "./thisapp/components/NameForm";
import {Country, CountryProvider, isCountry} from "./thisapp/country/country";
import {AddressForm} from "./thisapp/components/AddressForm";
import {SimpleComponentsProvider} from "./generic/hooks/use.component";
import {SimpleFieldComponents} from "./generic/components/simpleImpl/simple.field.components";


const country = window.location.search.split('=')[1] as Country;
if (country && !isCountry(country))
    throw new Error('Failed to get the country from the url');

function App() {
    return (
        <div>
            <SimpleComponentsProvider value={SimpleFieldComponents}>
                <CountryProvider country={country}>
                    <NameForm initialValue={{}}/>
                    <AddressForm initialValue={{}}/>
                </CountryProvider>
            </SimpleComponentsProvider>
        </div>
    );
}

export default App;
