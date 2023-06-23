import thunk from "redux-thunk"
import { applyMiddleware,createStore,compose, combineReducers } from "redux"
import postReducer from "./ReducerCollection"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(

    combineReducers({postReducer}),
    composeEnhancers(applyMiddleware(thunk))
)

export default store

