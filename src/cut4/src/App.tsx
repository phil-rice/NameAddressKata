import React from 'react';
import './App.css';
import {NameForm} from "./components/NameForm";
import {countries, Country, CountryProvider, isCountry} from "./render/country/country";
import {AddressForm} from "./components/AddressForm";

const country = window.location.search.split('=')[1] as Country;
if (country && !isCountry(country))
    throw new Error('Failed to get the country from the url');

function App() {
    return (
        <div>
            <CountryProvider country={country}>
                <NameForm/>
                <AddressForm/>
            </CountryProvider>
        </div>
    );
}

export default App;
