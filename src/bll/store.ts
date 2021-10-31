import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {loginReducer} from "./auth-reducer/login-reducer";
import {appReducer} from "./app-reducer";
import {registrationReducer} from "./auth-reducer/registation-reducer";

const rootReducer = combineReducers({
app: appReducer,
login: loginReducer,
registration: registrationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store
