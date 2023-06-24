import thunk from "redux-thunk"
import { applyMiddleware,createStore,compose, combineReducers } from "redux"
import movieReducer from "./ReducerCollection"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(

    combineReducers({movieReducer}),
    composeEnhancers(applyMiddleware(thunk))
)

export default store

