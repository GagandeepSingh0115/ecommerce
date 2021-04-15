import React, { useEffect } from "react";
import closeIcon from "../../assests/close-white.svg"
import checkIcon from "../../assests/check.svg"
import { useSnakbarContext } from "../Context/SnakbarContext"
import "./snakbar.css"
export const Snakbar = () =>{
    const { snakbarStatus , snakbarDispatch } = useSnakbarContext()
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            snakbarDispatch({type:"INITAIL"})
        },1000)

        return () =>{
            clearTimeout(timeoutId);
        }
    } ,[])

    const checkTypeOfSnakbar = (type) =>{
        switch(type){
            case "ERROR":
                return "snakbar-err";
            case "SUCCESS":
                return "snakbar-suc";
            case "WARNING":
                return "snakbar-war";
            default:
                return "snakbar";
        }
    }

    const snakbarType = checkTypeOfSnakbar(snakbarStatus['alertType'])
    return(
        <div className={ snakbarType }>
            <img src={ checkIcon } alt=""/>
            <h5>{ snakbarStatus["msg"] }</h5>
            <button className="btn-link">
                <img src={ closeIcon } alt=""/>
            </button>
        </div>
    )
}