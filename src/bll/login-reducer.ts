import {Dispatch} from "redux";

type InitialStateType = typeof initialState;
type ActionType = ReturnType<typeof setLoggedInAC>

const initialState = {
    isLoggedIn: false;
}

export const loginReducer = (state: InitialStateType=initialState, action: ActionType)=>{
    switch (action.type){
        case "SET_IS_LOGGED_IN":
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setLoggedInAC = (value:boolean) => ({type:"SET_IS_LOGGED_IN", value} as const);
export const loginTC = (data:any) => (dispatch:Dispatch<ActionType>)=>{

}