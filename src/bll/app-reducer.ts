import {Dispatch} from "redux";
import {authAPI} from "../dal/api";
import {setLoggedInAC, SetLoggedInAT} from "./auth-reducer/auth-reducer";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"

export type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
export type SetAppErrorAT = ReturnType<typeof setAppErrorAC>
export type SetInitializedAT = ReturnType<typeof setInitializedAC>
export type AppAT = SetAppStatusAT | SetAppErrorAT | SetInitializedAT | SetLoggedInAT

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false
}
type InitialStateType = typeof initialState;

export const appReducer = (state: InitialStateType = initialState, action: AppAT): InitialStateType => {
    switch (action.type) {
        case "app/SET_STATUS":
            return {...state, status: action.status}
        case "app/SET_ERROR":
            return {...state, error: action.error}
        case "app/SET_INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: "app/SET_STATUS", status} as const);
export const setAppErrorAC = (error: string | null) => ({type: "app/SET_ERROR", error} as const);
export const setInitializedAC = (isInitialized: boolean) => ({type: "app/SET_INITIALIZED", isInitialized} as const)

/*export const setInitializedTC = () => (dispatch: Dispatch<AppAT>) => {
    authAPI.me().then(res => {
        dispatch(setLoggedInAC(true))
        dispatch(setInitializedAC(true))
    }) .catch ((err) => {

    })
        .finally(() =>{
            dispatch(setInitializedAC(true))
        })
}*/

