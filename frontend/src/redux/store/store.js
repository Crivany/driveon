//Dependencias
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sesionReducer from "../reducers/sesionReducer";

const composeEnhancers =
    (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducer = combineReducers({
    sesion: sesionReducer
});

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);