import { notInitialized } from "react-redux/es/utils/useSyncExternalStore"
import React from "react"
import {useDispatch} from "react-redux"
import {remove_movie} from "./ActionCreator"



export default function Modal({single_movie}){

    const dispatch=useDispatch()



    return (
        <>
        {
        Object.keys(single_movie).length>3?
        <div className="modal_background d-flex flex-column">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="darkgrey" class="bi bi-x" viewBox="0 0 16 16" onClick={()=>{
                dispatch(remove_movie())
            }}>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <div className="modal_content d-flex ">
            <img src={`https://www.themoviedb.org/t/p/w500${single_movie.poster_path}`} className="movie_thumbnail"/>

            <div className="d-flex flex-column align-items-start pt-2">
                <div className="modal_title mx-2 mb-3">
                    {single_movie.title}
                </div>
                <div className="movie_modal_rating d-flex mb-4">
                <div className="mx-2">IMDB RATING :  {single_movie.vote_average}/10</div> 
                <div className="">({single_movie.vote_count}) Votes</div>
                </div>
                <div className="modal_description mx-2" align="start">
                {single_movie.overview}
                </div>
            </div>
            </div>
        
        </div>:
    
        <div className="d-none"></div>}
        

        </>
    )
}