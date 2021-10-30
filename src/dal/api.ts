import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export type LoginParamsType = {
    email: string;
    password: string;
    rememberMe: boolean
}

type ResponseType = {
_id: string;
email: string;
name: string;
avatar?: string; publicCardPackCount: number;
created: Date;
updated: Date;
isAdmin: boolean;
verified: boolean;
rememberMe: boolean;
error?: string;
}

export const authAPI = {
    login(data: LoginParamsType) {
        const promise = instance.post<ResponseType>('auth/login', data)
        return promise;
    }

}





