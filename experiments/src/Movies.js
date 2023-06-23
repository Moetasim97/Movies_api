import React from "react"
import {useDispatch} from "react-redux"
import {set_movie} from "./ActionCreator"


export default function Movie ({movie_state}){


    const dispatch=useDispatch()


    return (

        <>

        <div className="col-md-3  ">
            <div className="movie_card d-flex flex-column fit_content border " onClick={()=>{
                dispatch(set_movie(movie_state))
            }}>
            <img src={`https://www.themoviedb.org/t/p/w500${movie_state.poster_path}`} className="movie_thumbnail"/>
                <div className="d-flex flex-column div_dimensions align-items-center border">
                    <div className="mt-2">
                        {movie_state.title}
                    </div>
                    <div className="mt-2">
                    {movie_state.vote_average}
                    </div>
                
                </div>

            </div>

        </div>
        
        
        </>



    )
}