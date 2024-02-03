import react, {useState} from "react"

const FormBasics2 = () =>{

    const [name, setName] = useState("")
    const [result, setResult] = useState("")

    console.log("name", name);
    console.log("result", result);

    function handleInput(e){ //this is event so  (name = "Harisha G B")
        setName(e.target.value);
        setResult("")
    }
    function handleSubmit(e){
        e.preventDefault()
        setResult(name)
        setName("")
    }

    return(
        <div>
            {/* onSubmit={handleSubmit} */}
            <form >
                <input type="text" placeholder="Enter Name"
                onChange={handleInput} 
                value={name}
                />
                <button type="submit" onClick={handleSubmit}>submit</button>
            </form>

            <p>{result}</p>
            {/* <p>{name}</p> */}

            {/* { name!=""? <p>Hello {name}</p> : ""} */}
        </div>
    )
}

export default FormBasics2;

//controlled and uncontrolled components