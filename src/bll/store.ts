import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {loginReducer} from "./auth-resucers/login-reducer";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
login: loginReducer,
app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store
