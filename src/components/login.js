import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: "GET", 
            // body: JSON.stringify({
            //     email, password
            // })
        })
        .then((res) => {
            console.log(typeof(res));
            return res.json();
        }).then((res) => {
            console.log(res);
            localStorage.setItem("jwt", JSON.stringify(res));
            navigate("/home");

        })
    }

    return (
        <div className="Home">
            <h1>Log in Page</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="email" type="email" onChange={(e)=>setEmail(e.target.value)}></input>
                <input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button>Log In
                </button>
            </form>
        </div>
    );
}

export default Login;