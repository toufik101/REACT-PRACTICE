import React from "react";

const Celcius = ({celsius,onTemperatureChange}) => {
    
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="Celcius" className="block font-semibold">
          Celcius
        </label>
        <input
          type="number"
          name="Celcius"
          placeholder="0° C"
          className="border rounded p-2 w-full"
          value={celsius} onChange={(e)=>onTemperatureChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Celcius;
