import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {AuthAT, authReducer} from "./auth-reducer/auth-reducer";
import {appReducer} from "./app-reducer";
import {RegistrationAT, registrationReducer} from "./auth-reducer/registation-reducer";
import {PasswordRecoveryAT, passwordRecoveryReducer} from "./auth-reducer/password-recovery-reducer";
import {passwordUpdateReducer} from "./auth-reducer/password-update-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    registration: registrationReducer,
    passwordRecovery: passwordRecoveryReducer,
    passwordUpdate: passwordUpdateReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>
export type AppActionsType = AuthAT | RegistrationAT | PasswordRecoveryAT
//@ts-ignore
window.store = store
