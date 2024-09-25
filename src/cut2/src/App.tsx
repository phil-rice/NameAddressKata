import React from 'react';
import './App.css';
import {NameForm} from "./components/name.form";
import {AddressForm} from "./components/address.form";

function App() {
    return (
        <div>
            <NameForm/>
            <AddressForm/>
        </div>

    );
}

export default App;
