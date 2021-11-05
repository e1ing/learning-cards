import {Dispatch} from "redux";
import {AppAT, setAppStatusAC, setInitializedAC} from "../app-reducer";
import {authAPI} from "../../dal/api";

export const recoveryTC = (email:string) => (dispatch: Dispatch<AppAT>)=> {
    dispatch(setAppStatusAC('loading'));
    authAPI.recoveryPassword(email)
        .then(res=> {
            dispatch(setInitializedAC(true));
        })
}