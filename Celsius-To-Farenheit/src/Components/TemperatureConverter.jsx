import React, { useState } from "react";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState({
    celsius: "",
    fahrenheit: "",
  });

  const handleCelsius = (value) => {
    const celsius = parseInt(value) || 0;
    const fahrenheit = (celsius * 9) / 5 + 32;

    setTemperature({
      celsius: value,
      fahrenheit: fahrenheit.toFixed(2),
    });
  };

  const handleFahrenheit = (value) => {
    const fahrenheit = parseInt(value) || 0;
    const celsius = ((fahrenheit - 32)*5 )/9;

    setTemperature({
      fahrenheit: value,
      celsius: celsius.toFixed(2),
    });
  };

  return (
    <div>
      <div className="rounded-2xl w-sm backdrop-blur-lg bg-gradient-to-l from-green-100 to-green-200  shadow-2xl shadow-indigo-600 m-auto flex flex-col justify-center p-4">
        <h1 className="text-3xl my-4 text-center font-semibold text-shadow-2xs">Temperature ℃/℉</h1>
        <Celcius celsius={temperature.celsius} onTemperatureChange={handleCelsius} />
        <Fahrenheit fahrenheit={temperature.fahrenheit} onTemperatureChange={handleFahrenheit}/>
      </div>
    </div>
  );
};

export default TemperatureConverter;
