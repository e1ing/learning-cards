import { Dispatch } from "redux";
import {authAPI, AuthParamsType} from "../../dal/api";
import {setAppErrorAC, SetAppErrorAT, setAppStatusAC, SetAppStatusAT} from "../app-reducer";


type InitialStateType = typeof initialState;
type ActionType = ReturnType<typeof registerUserAC>|SetAppStatusAT|SetAppErrorAT
const initialState = {
    isRegistered: false
}

export const registrationReducer = (state: InitialStateType=initialState, action: ActionType) => {
    switch (action.type){
        case "reg/REGISTER_USER":
            return {...state, isRegistered: action.isRegistered}
            default:
                return state
}
}

export const registerUserAC = (isRegistered: boolean) => ({type: "reg/REGISTER_USER", isRegistered}as const)

export const registerUserTC = (data: AuthParamsType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setAppStatusAC('loading'));
    authAPI.register(data)
        .then(res => {
            dispatch(registerUserAC(true));
            dispatch(setAppStatusAC("succeeded"));
        })
        .catch((e) => {
            const error = e.res ? e.res.data.error : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
            dispatch(setAppStatusAC("failed"))
        })
}