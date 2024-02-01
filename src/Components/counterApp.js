import React, { useState } from "react";

const CounterApp = () =>{

    const [count, setCount] = useState(10)

    function increase(){
        if(count<=9) {
        setCount(count+1)
       }
    }

    return(
        <div>
            <h1> {count} </h1>
            <button onClick={increase}> Increase </button>
            <button onClick={()=>count>=2? setCount(count-1): ""}> Decrease </button>
            <button onClick={()=>setCount(0)}> Reset </button>
        </div>
    )
}

export default CounterApp;

// max inc the value of count till 10,
// min dec the value of count till 1

/* 
###inside return statement con't use loops instead of that we use
higher order functions like map, filter, reduce
###conditional rendering => ternary operator
*/