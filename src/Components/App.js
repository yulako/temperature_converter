import React, { useState } from 'react';
import "../../src/App.css"
import Conversion from './Conversion'

const App = () => {

    const [darkMode, switchDark] = useState(true);
    const [curTheme, switchTheme] = useState('Darkmode')


        return (
            <div className={darkMode? 'light-mode': 'dark-mode'}>
            <h1>Conversion of Temperature</h1>
         
            <button className="button" onClick={()=>
                {switchDark(curMode=>!curMode) 
                 switchTheme(darkMode ?'Lightmode': 'Darkmode')}}>{curTheme}</button>
            <h3>Quick Celsius(˚C) / Fahrenheit(˚F) Conversion: </h3><br/>
            <Conversion color={darkMode}/>
            </div>
 
        )
    };

export default App;
