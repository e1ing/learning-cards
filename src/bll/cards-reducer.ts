import {cardsAPI, CardsResponseType, CardType} from "../dal/api";
import {AppThunk} from "./store";
import {setAppErrorAC, setAppStatusAC} from "./app-reducer";

type InitialStateType = {
    cards: Array<CardType>
}

const initialSate: InitialStateType = {
    cards: [],
}

export type CardsActionType = ReturnType<typeof setCardsAC>

export const cardsReducer = (state: InitialStateType = initialSate, action: CardsActionType): InitialStateType => {
    switch (action.type) {
        case "cards/SET_CARDS":
            return {...state, cards: action.cards}
        default:
            return state
    }
}

export const setCardsAC = (cards: CardType[]) => ({type: "cards/SET_CARDS", cards} as const)

export const getCardsTC = (packId: string): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));
    cardsAPI.getCards(packId)
        .then(res => {
            dispatch(setCardsAC(res.data.cards))
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
}

export const createCardTC = (packId: string): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));
    cardsAPI.createCard(packId)
        .then(res => {
            dispatch(getCardsTC(res.data.cards))
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
}

export const deleteCardTC = (cardId: string): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));
    cardsAPI.deleteCard(cardId)
        .then(res => {
            dispatch(getCardsTC(res.data.cards))
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
}

export const updateCardTC = (cardId: string, packId: string): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));
    cardsAPI.updateCard(cardId, packId)
        .then(res => {
            dispatch(getCardsTC(res.data.cards))
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
}