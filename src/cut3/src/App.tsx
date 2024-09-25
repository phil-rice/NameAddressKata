import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NameForm} from "./components/NameForm";
import {AddressForm} from "./components/AddressForm";

function App() {
    return (
        <div className="App">
            <NameForm/>
            <AddressForm/>
        </div>
    );
}

export default App;
