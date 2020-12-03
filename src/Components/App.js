import React, { useState } from 'react';
import "../../src/App.css"
import Conversion from './Conversion'

const App = () => {

    const [darkMode, switchDark] = useState(false);

        return (
            <div className={darkMode? 'light-mode': 'dark-mode'}>
            <h1>Conversion of Temperature</h1>
            <button onClick={()=>switchDark(curMode=>!curMode)}>switch mode</button>
            <h3>Quick Celsius(˚C) / Fahrenheit(˚F) Conversion: </h3><br/>
            <Conversion />
            </div>
 
        )
    };

export default App;
