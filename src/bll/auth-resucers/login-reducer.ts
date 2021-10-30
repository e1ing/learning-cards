import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../dal/api";
import {setAppStatusAC, SetAppStatusAT} from "../app-reducer";

type InitialStateType = typeof initialState;
type ActionType = ReturnType<typeof setLoggedInAC> | SetAppStatusAT

const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionType) => {
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

        })

}