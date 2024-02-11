import React,{useState} from "react";

//    function hello(){  // it a global scope it excicutes hello multiple times
//         console.log("Hello");
//         return 100      
//       }
  const LazyInitialization = () =>{
      const [count, setCount] = useState(() =>{
        console.log("Hello");
        return 100
      })  //hello() //   this gunction excuites hello one time bcz its local scope
    
     return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}> click  </button>
        </div>
    )
}

export default LazyInitialization;