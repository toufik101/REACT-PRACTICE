import React, { useEffect, useState } from 'react';

const WindowResize = () => {
    let [windowSize,setWindowSize] = useState(0)
    useEffect(()=>{
        let handleResize  = ()=>setWindowSize(window.innerWidth);
        window.addEventListener("resize",handleResize);
        //clear addevenlistener
        return()=> window.removeEventListener("resize",handleResize)
    },[])
    return (
        <div>
            <h1 className='py-8 font-bold'>Window size is: {windowSize}</h1>
        </div>
    );
};

export default WindowResize;