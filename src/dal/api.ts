import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    /* "http://localhost:7542/2.0/",*/
    withCredentials: true,
})

//authentication API
export type AuthParamsType<D = {}> = {
    email: string;
    password: string;
    data?: D
}

type AuthResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPackCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

export const authAPI = {
    login(data: AuthParamsType<boolean>) {
        return instance.post<AuthResponseType>(`auth/login`, data)
    },

    register(data: AuthParamsType) {
        return instance.post<string>(`auth/register`, data)
    },

    me() {
        return instance.post<AuthResponseType>(`auth/me`, {})
    },

    logout() {
        return instance.delete<string>(`auth/me`, {})
    },

    passwordRecovery(email: string) {
        return instance.post<string>(`auth/forgot`, {
            email: email,
            from: `Learning cards <elvira-kisling@yandex.ru>`,
            message: `<div style="background-color: #9890C7 ; padding: 15px; font-size: 40px">
                            Click <a href='http://localhost:3000/password-update/$token$'>here</a> 
                            to restore your password
                      </div>`
        })
    },

    updatePassword(password: string, resetPasswordToken: string) {
        return instance.post<string>(`/auth/set-new-password`, {resetPasswordToken, password})
    }
}

//packs API
type CardType = {
    _id: string
    user_ud: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: Date
    updated: Date
    _v: number
}

export type PacksResponseType = {
    cardPacks: Array<CardType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    padeCount: number
}

export const packsAPI = {
    getPack() {
        return instance.get<PacksResponseType>(`/cards/pack`)
    },
    createPack(data:) {
        return instance.post<CardType>(`/cards/pack`, data)
    },
    deletePack() {
        return instance.delete<string>(`/cards/pack`, {})
    },
    updatePak(_id: string) {
        return instance.put<string>(`/cards/pack`, _id)
    }
}


//cards API

export const cardsAPI = {
    getCard() {
        return instance.get<>(`/cards/card`)
    },
    createCard() {

    },
    deleteCard() {

    },
    updateCard() {

    }
}







