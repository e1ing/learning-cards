import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../dal/api";
import {setAppStatusAC, SetAppStatusAT, setInitializedAC, SetInitializedAT} from "../app-reducer";

type InitialStateType = typeof initialState;
type ActionType = ReturnType<typeof setLoggedInAC> | SetAppStatusAT | SetInitializedAT

const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "login/SET_IS_LOGGED_IN":
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setLoggedInAC = (value: boolean) => ({type: "login/SET_IS_LOGGED_IN", value} as const);

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setAppStatusAC('loading'));
    authAPI.login(data)
        .then(res => {
            dispatch(setLoggedInAC(true));
            dispatch(setAppStatusAC("succeeded"))
            dispatch(setInitializedAC(true))
        })
        .catch(e => {
            const error = e.res ? e.res.data.error : (e.message + ', more details in the console');
            console.log(error)
        })
}