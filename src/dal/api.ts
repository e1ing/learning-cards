import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
     /*"http://localhost:7542/2.0/",*/
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
export type PackType = {
    _id: string
    user_id: string
    user_name: string //absent in API
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: Date
    updated: Date
    __v: number
}

export type PacksResponseType = {
    cardsPack: Array<PackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    padeCount: number
}

export const packsAPI = {
    getPacks(userId: string) {
        return instance.get<PacksResponseType>(`cards/pack?user_id=${userId}`)
    },
    createPack(name: string) {
        return instance.post<PackType>(`cards/pack`, {
            cardsPack:{
                name: name
            }
        })
    },
    deletePack(_id: string) {
        return instance.delete<string>(`cards/pack?id=${_id}`)
    },
    updatePaсk(id: string) {
        return instance.put<PackType>(`cards/pack`, {
            cardsPack: {
                _id: id
            }
        })
    }
}


//cards API
export type CardType = {
    answer: string
    question: string
    packId: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: Date
    updated: Date
    __v: number
    _id: string
}

export type CardsResponseType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: number
}

export const cardsAPI = {
    getCards(packId: string) {
        return instance.get<CardsResponseType>(`cards/card?cardsPack_id=${packId}`)
    },
    createCard(packId: string) {
        return instance.post<CardType>(`cards/card`, {card: {cardsPack_id: packId}})
    },
    deleteCard(cardId: string) {
return instance.delete<any>(`cards/card?&id=${cardId}`)
    },
    updateCard(cardId: string, packId: string) {
return instance.put<CardsResponseType>(`cards/card`, {card: {_id: cardId}})
    }
}







