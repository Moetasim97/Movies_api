import { combineReducers } from "redux";



const initialState={

    Movies:[],
    status:"idle",
    page_number:1,
    movie:{}
}


  const movieReducer=(state=initialState,action)=>{

    switch(action.type){

      case "Change Page":

      return {...state,page_number:action.page_num}

    case "Engage Fetching":

    return {...state,status:"Movies added",Movies:action.payload}

    case "Fetching Data":

    return {...state,status:"starting"}


    case "Error Fetching":

    return {...state,status:action.payload}

    case "Set Current Movie":

    return {...state,movie:action.payload}

    case "Remove Movie":

    return {...state,movie:{}}

    default :
    return initialState
    


}
}

export default postReducer