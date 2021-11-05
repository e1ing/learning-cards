import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    /* "http://localhost:7542/2.0/",*/
    withCredentials: true,
})

export type AuthParamsType<D = {}> = {
    email: string;
    password: string;
    data?: D
}

type ResponseType = {
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
        return instance.post<ResponseType>(`auth/login`, data)
    },

    register(data: AuthParamsType) {
        return instance.post<string>(`auth/register`, data)
    },

    me() {
        return instance.post<ResponseType>(`auth/me`, {})
    },

    logout() {
        return instance.delete<string>(`auth/me`, {})
    },

    recoveryPassword(email: string) {
        return instance.post<string>(`auth/forgot`, {
            email: email,
            from: `test-front-admin <elvira-kisling@yandex.ru>`,
            message: `<div style="background-color: lime; padding: 15px">
                            Click <a href='http://localhost:3000//$token$'>here</a> //$token$ надо для токена для восстановления пароля
                            to restore your password
                      </div>`
        })
    },

    updatePassword(resetPasswordToken: string, password: string) {
        return instance.post<string>(`/auth/set-new-password`, {resetPasswordToken, password})
    }
}







