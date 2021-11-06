import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "../app-reducer";
import {authAPI} from "../../dal/api";

type InitialStateType = typeof initialState;
export type SetRecoveryInitializationAT = ReturnType<typeof setRecoveryInitializationAC>
export type RecoveryAT = SetRecoveryInitializationAT
const initialState = {
    isRecoveryInitialized: false
}

export const recoveryReducer = (state: InitialStateType=initialState, action: RecoveryAT):InitialStateType => {
    switch (action.type){
        case "recovery/SET-RECOVERY-INITIALIZATION":
            return {...state, isRecoveryInitialized: action.isRecoveryInitialized}
        default:
            return state
    }
}

const setRecoveryInitializationAC = (isRecoveryInitialized: boolean) =>({
    type: "recovery/SET-RECOVERY-INITIALIZATION", isRecoveryInitialized} as const)

export const passwordRecoveryTC = (email:string) => (dispatch: Dispatch)=> {
    dispatch(setAppStatusAC('loading'));
    authAPI.recoveryPassword(email)
        .then(res=> {
            dispatch(setRecoveryInitializationAC(true));
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        });
};