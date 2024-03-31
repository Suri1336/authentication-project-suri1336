import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        actions.login(email,password)
    };
    if (store.token&&store.token!==""&&store.token!==undefined){
        navigate("/private")
    }
    return (
        <div>
            <div className="container">
                {(store.token&&store.token!==""&&store.token!==undefined)?
                "you are loged in with token"+store.token
            
            :
           
                <>
                <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin}>Login</button>
                </>

                
            }

            </div>
        </div>
    )
}
