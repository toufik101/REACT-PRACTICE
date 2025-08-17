import React, { useEffect, useState } from "react";

const FetchData = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((value, index) => (
          <li key={index}>
            <div className="rounded-2xl p-4 bg-white/20 backdrop-blur-md shadow-lg hover:shadow-xl transition duration-300">
              <h2 className="text-lg font-semibold mb-2">{value.title}</h2>
              <p className="text-gray-600 text-sm">
                {value.description || "This is a sample card description."}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
