import React from "react"


const startFetching=()=>{


    return {type:"Fetching Data"}
}


const fetching=(data)=>{


    return {type:"Engage Fetching",payload:data}
}


const fetching_error=(error)=>{

    return {type:"Error Fetching",payload:error}
}

const changing_page=(number)=>{

    

    return {type:"Change Page",page_num:number}
}

const set_movie=(state)=>{

    return {type:"Set Current Movie",payload:state }
}

const remove_movie=()=>{

    return {type:"Remove Movie"}
}

export {fetching_error,fetching,startFetching,changing_page,set_movie,remove_movie}