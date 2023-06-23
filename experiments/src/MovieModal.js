import { notInitialized } from "react-redux/es/utils/useSyncExternalStore"
import React from "react-router"

import {remove_movie} from "./ActionCreator"



export default function Modal({single_movie}){






    return (
        <>
        {
        Object.keys(single_movie).length>3?
        <div className="modal_background d-flex flex-column">
            <div className="modal_content d-flex ">
            <img src={`https://www.themoviedb.org/t/p/w500${single_movie.poster_path}`} className="modal_image"/>
            </div>
        
        </div>:
    
        <div className="d-none"></div>}
        

        </>
    )
}