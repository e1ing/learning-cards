import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export type AuthParamsType <D={}> = {
    email: string;
    password: string;
    data?: D
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
    me(){
        return instance.post<ResponseType>(`auth/me`, {})
    },

    login(data: AuthParamsType<boolean>) {
        return instance.post<ResponseType>(`auth/login`, data)
    },

    register(data:AuthParamsType){
        return instance.post<string>(`auth/register`, data)
    }

}





