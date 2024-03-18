import React from 'react';
import './App.css';
import {HomePage} from "./pages/HomePage/Home.Page";
import {AppHeader} from "./components/AppHeader/AppHeader";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <HomePage/>
        </div>
    );
}

export default App;
