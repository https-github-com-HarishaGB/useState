import React, {useState} from "react";


const FormValidation = () =>{

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setconfirmPassword] = useState("")

    //        or we can write like bellow code
    

    const [user, setUser] = useState({name:"",email:"",password:"",confirmPassword:""})
    const [message, setMessage] = useState("")
    const {name, email, password, confirmPassword} = user //de-structur
    
    // function handleEmail(e){
    //     setUser({...user, email:e.target.value})
    // }
    // function handleName(e){
    //     setUser({...user, name:e.target.value})
    // }
    // function handlePassword(e){
    //     setUser({...user, password:e.target.value})
    // }
    // function handleConfirmPassword(e){
    //     setUser({...user, confirmPassword:e.target.value})
    // }

    function updateUser(e){
        console.log(e.target.name, e.target.value);
        // setUser({...user, email:e.target.value})
        let key = e.target.name
        setUser({...user, [key]:e.target.value})
    }

    function submitUser(e){
        e.preventDefault()

        if(!name || !email || !password || !confirmPassword){
            alert("Pleasae fill all the fields")
        }
        else if(password !== confirmPassword){
            alert("Password and confirm Password must be same")
        }
        else{
            setMessage("User registered Successfully")
        }
    }
    return(
        <div>
            {
                message ? <div>
                    Hey {name} {message} with email {email  }
                </div> : null
            }
            <form onSubmit={submitUser}>
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={updateUser}
                name="name"
                />
                <br/>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={updateUser}
                name="email"
                />
                <br/>
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={updateUser}
                name="password"
                />
                <br/>
                <input
                type="password"
                placeholder="confirmPassword"
                value={confirmPassword}
                onChange={updateUser}
                name="confirmPassword"
                />
                <br/>
                <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default FormValidation;