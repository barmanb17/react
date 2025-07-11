import React from 'react'

const Weather = () => {
    let tem = 1;
    let msg = "";
    if(tem < 15) {
         msg = "It's cold outside, wear a jacket";
    } else if (tem >= 15 && tem < 25) {
         msg = "It's a pleasant day, enjoy the weather";
    } else if (tem > 25) {
         msg = "It's hot outside, stay hydrated";
    }
  return (
    <div>
        <h1>Weather Report</h1>
        <p>{msg}</p>
    </div>
  )
}

export default Weather