import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    function submitRequest() {
        actions.addUser(email, password)
    }
    return (
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link to="/login">
                <button type="submit" class="btn btn-primary" onClick={submitRequest}>Sign Up</button>
            </Link>
        </form>
    )

}