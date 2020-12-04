import React, { useState } from 'react';

const Conversion = ({color}) => {

  const [temp, changeTemp] = useState({ c: 0, f: 0 });

  const changeToFahrenheit = (e) => changeTemp({
    c: e.target.value,
    f: e.target.value * (9/5) + 32
  });

  const changeToCelcius = (e) => changeTemp({
    c:  (( e.target.value - 32 ) * 5/9).toFixed(3),
    f: e.target.value
  });
  

  return (
    <div className="box" style={{backgroundColor: color? 'Pink' : 'dimgray'}}>Type a value in either box:<br/>
    <p></p>
        <label htmlFor="">Celcius: </label>
        <input 
        type="text" 
        value={temp.c}
        onChange={changeToFahrenheit}
          /><br/>
        <label htmlFor="">Farenheit: </label>
        <input 
        type="text" 
        value={temp.f}
        onChange={changeToCelcius}
          />
     
    </div>
  );
  };

export default Conversion;