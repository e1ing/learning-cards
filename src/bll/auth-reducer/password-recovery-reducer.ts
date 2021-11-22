import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer";
import {authAPI} from "../../dal/api";

type InitialStateType = typeof initialState;
export type PasswordRecoveryAT = ReturnType<typeof setRecoveryInitializationAC>
const initialState = {
    isRecoveryInitialized: false
}

export const passwordRecoveryReducer = (state: InitialStateType=initialState, action: PasswordRecoveryAT):InitialStateType => {
    switch (action.type){
        case "recovery/SET_RECOVERY_INITIALIZATION":
            return {...state, isRecoveryInitialized: action.isRecoveryInitialized}
        default:
            return state;
    }
}

const setRecoveryInitializationAC = (isRecoveryInitialized: boolean) =>({
    type: "recovery/SET_RECOVERY_INITIALIZATION", isRecoveryInitialized} as const)

export const passwordRecoveryTC = (email:string) => (dispatch: Dispatch)=> {
    dispatch(setAppStatusAC('loading'));
    authAPI.passwordRecovery(email)
        .then(res=> {
            dispatch(setRecoveryInitializationAC(true));
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        });
};