import React from "react";

const Fahrenheit = ({fahrenheit,onTemperatureChange}) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="Farenheit" className="block font-semibold">
          Fahrenheit
        </label>
        <input value={fahrenheit} onChange={(e)=>onTemperatureChange(e.target.value)} type="number" name="fahrenheit" placeholder="32° F" className="border rounded p-2 w-full"/>
      </div>
    </div>
  );
};

export default Fahrenheit;
