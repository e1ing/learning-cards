import { Dispatch } from "redux";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer";
import {authAPI} from "../../dal/api";

type InitialStateType = typeof initialState;
export type PasswordUpdateAT = ReturnType<typeof setIsPasswordUpdateAC>
const initialState = {
    isPasswordUpdated: false
}

export const passwordUpdateReducer = (state: InitialStateType=initialState, action: PasswordUpdateAT): InitialStateType => {
    switch (action.type) {
        case "update/SET-IS-PASSWORD-UPDATE":
            return {...state, isPasswordUpdated: action.isPasswordUpdated}
    default:
        return state;
}
}

const setIsPasswordUpdateAC = (isPasswordUpdated: boolean) => ({
    type: "update/SET-IS-PASSWORD-UPDATE", isPasswordUpdated} as const)

export const passwordUpdateTC = (password: string, token: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'));
    authAPI.updatePassword(password, token)
        .then (res => {
            dispatch(setIsPasswordUpdateAC(true));
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(e => {
            const error = e.res ? e.res.data.error : (`Update password failed: ${e.message}.`)
            dispatch(setAppErrorAC(error))
            dispatch(setAppStatusAC('succeeded'));
        });
}