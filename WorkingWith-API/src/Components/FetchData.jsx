import React, { useEffect, useState } from "react";
import Card from "./Card";

const FetchData = () => {
  let [data, setData] = useState([]);
  let [error,setError] = useState();
  let [loading,setLoading] = useState(true)

  useEffect(() => {
    let dataCalling = async () => {
      try {
        let res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s"
        );
        if (!res.ok) {
          throw new Error("Error is" + res.status);
        }
        let data = await res.json();
        setData(data.meals || []);
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    };
    dataCalling();
  }, []);

  return (
    <div>
      <div className="min-h-screen  w-full  rounded-2xl p-8
                        bg-white/30 shadow-lg
                        backdrop-blur-md backdrop-saturate-150
                        border border-white/40">
        <div className="">
          <h1 className="text-2xl text-center font-bold">Data Fetching from the Meal DB API</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 container mx-auto py-8">
              {
                loading && <p className="text-blue-500 text-center">Loading....Data</p>
              }
              {
                error && <p className="text-red-600 text-center">Something Went wrong</p>
              }

              {
                data.map((meals,index)=>(
                  <Card key={index} meals={meals}/>
                  
                ))
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default FetchData;
