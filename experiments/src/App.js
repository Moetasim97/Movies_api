import logo from './logo.svg';
import './App.css';
import React from "react"
import { useDispatch } from 'react-redux';
import {useEffect} from "react"
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {fetching,fetching_error,startFetching,changing_page} from "./ActionCreator"
import Movie from "./Movies"
import Modal from './MovieModal';

function App() {
  const dispatch=useDispatch()

  const first_page=1
  const second_page=2



  const single_mov=useSelector((store)=>store.postReducer.movie)

  const data=useSelector((store)=>store.postReducer.Movies.results)

  const page_no=useSelector((store)=>store.postReducer.page_number)
// Here I'm retrieving the data from the store

// I'm going to insert the page_number into the api call and this is going to be my criteria for fetching
  

  const useBoolean=(initialState=false)=>{
    const [toggleButton,toggleState]=React.useState(initialState)

    const setTrue=()=>{
      toggleState(true)
    }
    const setFalse=()=>{
      toggleState(false)
    }
    return [toggleButton,{changeTrue:setTrue,changeFalse:setFalse}]
    
  }
  console.log(page_no)
  useEffect(
    ()=>{
      
      dispatch(startFetching())
      fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page_no}`,{ 
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTlmZDQ3NjY1ZjRhZWIxMWFkZjYyMWY3YTBjNmQyOSIsInN1YiI6IjY0NzcyZDhiMjU1ZGJhMDEyOWNlMzdiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZqYs-OqNUTV61BhMwILTJ1MKxSC_V-15rQrH8M8ZFQ'

        }
      }).then((response)=>response.json())
      .then((data)=>dispatch(fetching(data))).catch((error)=>dispatch(fetching_error(error)))
    },[page_no]
  )



  

  return (
    <div className="App ">
      
      <Modal single_movie={single_mov}/>
      <div className='container'>
        <div className='row mb-4 '>
          <div className='d-flex justify-content-start mx-0 px-0'>
            <div className='page_title mb-2'>Movies</div>
          </div>
          <div className='d-flex flex-column border align-items-start p-3'>
            <div className=' h4' >Stats</div>
            <div className='d-flex'>
                <div>Current Page:</div>
                <div className='current_page_no'>

                </div>
            </div>
            <div className='d-flex'>
              <div>
                Number Of Movies:
              </div>
              <div className='movie_no'>

              </div>
            </div>
            <div className='d-flex'>
              <div>
              Top Rated Movie:
              </div>
              <div className='top_rated_movie'>

              </div>
            </div>
            <div className='d-flex'>
              <div>
              Rating:
              </div>
              <div className='imdb_rating'>

              </div>
            </div>
          </div>

        </div>

      </div>


      <div className='container'>
        <div className='row g-3 mb-3'>

        {data != undefined? data.map((mov,key)=>{
          return (
            <>
            <Movie movie_state={mov} key={key}/>
            </>
          )
        }):
        <div>Loading...</div>}
        </div>

      </div>

      <div className='d-flex w-100 justify-content-center '>
        <button className='btn_style border' onClick={()=>{
          dispatch(changing_page(1))
        }}>Previous</button>
        <button className='btn_style border' onClick={()=>{
          dispatch(changing_page(2))
        }}>Next</button>
      </div>

    </div>


    
  );
}

export default App;
