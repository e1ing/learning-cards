import {AuthResponseType} from "../../dal/api";
import {AuthAT} from "./auth-reducer";

export type UserType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;

    name: string;
    verified: boolean;

    token: string;
    tokenDeathTime: number;

    created: Date;
    updated: Date;
}

type InitialStateType  = typeof initialState;
export type InitializeProfileAT = ReturnType<typeof setUserAC>
export type ProfileAT = InitializeProfileAT;

const initialState = {
    user: {
        _id: '',
        email: '',
        rememberMe: false,
        isAdmin: false,

        name: '',
        verified: false,

        token: '',
        tokenDeathTime: 0,

        created: new Date(),
        updated: new Date(),
    } || null,
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileAT): InitialStateType => {
    switch (action.type) {
        case "profile/SET_USER":
            return {...state, user: action.user}
    }
}

export const setUserAC = (user: UserType) => ({type: "profile/SET_USER", user} as const);