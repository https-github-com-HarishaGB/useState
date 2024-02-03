import React, {useState} from "react";

const Fruits = () =>{
      const [favouriteFruits, setFavouriteFruits] = useState(["Apple", "Mango", "Banana"])

      const [fruit, setFruit] = useState("")

      console.log(favouriteFruits);

      function addFruits(e){
        e.preventDefault()
        setFavouriteFruits([...favouriteFruits, fruit]) 
        setFruit("")
      }

    return(
        <div>
            <form onSubmit={addFruits}>
                <input type="text" placeholder="Enter Fruits"
                onChange={e => setFruit(e.target.value)}
                value={fruit}
                />
                <button type="submit"> Add Fruits </button>
                
            </form>
            {/* display contents of favouritFruits array */}

            {favouriteFruits.join(", ")}
        </div>
    )
}

export default Fruits;