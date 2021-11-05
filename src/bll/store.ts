import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import {AuthAT, authReducer} from "./auth-reducer/auth-reducer";
import {appReducer} from "./app-reducer";
import {RegistrationAT, registrationReducer} from "./auth-reducer/registation-thunk";

const rootReducer = combineReducers({
app: appReducer,
auth: authReducer,
registration: registrationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
export type AppActionsType = AuthAT | RegistrationAT
//@ts-ignore
window.store = store
