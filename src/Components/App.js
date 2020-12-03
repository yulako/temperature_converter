import React, { Component } from 'react';
import "../../src/App.css"
import Conversion from './Conversion'

class App extends Component {
    render() {
        return (
            <div className="app">
            <h1>Conversion of Temperature</h1>
            <h3>Quick Celsius(˚C) / Fahrenheit(˚F) Conversion: </h3><br/>
            <Conversion />
            </div>
 
        )
    }
}

export default App
