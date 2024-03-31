import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private =()=>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    useEffect(()=>{
        if(store.token&&store.token!==""&&store.token!==undefined?
        navigate("/private")
        :
        navigate("/login"));
    }, [store.token])
    return(
        <div>
            Welcome to your private page 
        </div>
    )
}