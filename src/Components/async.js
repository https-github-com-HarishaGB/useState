import React, {useState} from "react";

const Async = () =>{

    const [count, setCount] = useState(0)

    console.log("I am Excicuting")
      function inc1(){
        setCount(count + 1)
        setCount(count + 4)
        setCount(count + 16)
        // console.log(count)
      }

      // function inc2(){
      //   setCount(count => count + 1)
      //   setCount(count => count + 1)
      // }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc1}>Click</button>
        </div>
    )
  }

export default Async;