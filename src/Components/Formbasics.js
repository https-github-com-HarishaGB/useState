import react, {useState} from "react"

const FromBasics = () =>{

    const [name, setName] = useState()

    function handleInput(e){ //this is event so  (name = "Harisha G B")
        setName(e.target.value);
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Enter Name"
                onChange={handleInput} />
            </form>
            <p>{name}</p> 

            {/* { name!=""? <p>Hello {name}</p> : ""} */}
        </div>
    )
}

export default FromBasics;