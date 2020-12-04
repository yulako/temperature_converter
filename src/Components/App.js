import React, { useState } from 'react';
import "../../src/App.css"
import Conversion from './Conversion'

const App = () => {

    const [curTheme, switchTheme] = useState('true');

        return (
            <div className={curTheme ? 'light-mode': 'dark-mode'}>
            <div style={{ width: '100%', textAlign: 'center' }}>
            <h1>Conversion of Temperature</h1>
            </div>
         
            <button className="button" onClick={()=>{ switchTheme(curTheme ? false : true) }}>{curTheme? 'Darkmode':'Lightmode'}</button>
            <h3>Quick Celsius(˚C) / Fahrenheit(˚F) Conversion: </h3><br/>
            <Conversion color={darkMode}/>
            </div>
 
        )
    };

export default App;
