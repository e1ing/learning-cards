import {Dispatch} from "redux";
import {authAPI, AuthParamsType} from "../../dal/api";
import {
    setAppErrorAC,
    SetAppErrorAT,
    setAppStatusAC,
    SetAppStatusAT,
    setInitializedAC,
    SetInitializedAT
} from "../app-reducer";

type InitialStateType = typeof initialState;
type SetLoggedInAT = ReturnType<typeof setLoggedInAC>
type ActionType = SetLoggedInAT | SetAppStatusAT | SetInitializedAT | SetAppErrorAT

const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "login/SET_IS_LOGGED_IN":
            return {...state, isLoggedIn: action.isLoggedIn}
        default:
            return state
    }
}

export const setLoggedInAC = (isLoggedIn: boolean) => ({type: "login/SET_IS_LOGGED_IN", isLoggedIn} as const);

export const loginTC = (data: AuthParamsType<boolean>) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setAppStatusAC('loading'));
    authAPI.login(data)
        .then(res => {
            dispatch(setLoggedInAC(true));
            dispatch(setAppStatusAC("succeeded"));
            dispatch(setInitializedAC(true));
        })
        .catch(e => {
            const error = e.res ? e.res.data.error : (e.message + ', more details in the console');
            console.log(error)
            dispatch(setAppErrorAC(error))
            dispatch(setAppStatusAC("failed"))
        })
}