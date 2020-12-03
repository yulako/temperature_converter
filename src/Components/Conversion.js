import React, { useState } from 'react';



const Conversion = () => {

  const [temp, changeTemp] = useState({ c: 0, f: 0 })

  const changeToFahrenheit = (e) => changeTemp({
    c: e.target.value,
    f: e.target.value * (9/5) + 32
  });

  const changeToCelcius = (e) => changeTemp({
    c:  (( e.target.value - 32 ) * 5/9).toFixed(3),
    f: e.target.value
  });
  

  return (
    <div className="box">Type a value in either box:
       <form action=""> 
        <br/>
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
      </form>


    </div>
  );
  };

export default Conversion;