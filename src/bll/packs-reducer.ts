import {packsAPI, PackType} from "../dal/api";
import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "./app-reducer";
import {AppRootStateType, AppThunk} from "./store";

type InitialStateType = {
    packs: PackType[]
    packUser_id: string
};
export type PacksActionType = ReturnType<typeof setPacksAC> | ReturnType<typeof setPackUser_idAC>;

const initialState: InitialStateType = {
    packs: [],
    packUser_id: "",
};

export const packsReducer = (state: InitialStateType = initialState, action: PacksActionType): InitialStateType => {
    switch (action.type) {
        case "packs/SET_PACKS":
            return {...state, packs: action.packs}
        case "packs/SET_PACKS_USER_ID":
            return {...state, packUser_id: action.packUser_id}
        default:
            return state
    }
}

export const setPacksAC = (packs: PackType[]) => ({type: "packs/SET_PACKS", packs} as const)
export const setPackUser_idAC = (packUser_id: string) => ({type: "packs/SET_PACKS_USER_ID", packUser_id} as const)

export const getPacksTC = (): AppThunk => (dispatch, getState) => {
    const packUser_id = getState().packsReducer.packUser_id;
    dispatch(setAppStatusAC('loading'));
    packsAPI.getPacks(packUser_id)
        .then(res => {
            dispatch(setPacksAC(res.data.cardsPack));
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
}

export const createPackTC = (name: string): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));
    packsAPI.createPack(name)
        .then(res => {
            dispatch(getPacksTC());
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
};

export const deletePacksTC = (packId: string): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));
    packsAPI.deletePack(packId)
        .then(res => {
            dispatch(getPacksTC());
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
}

export const updatePacksTC = (packId: string): AppThunk => (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));
    packsAPI.updatePaсk(packId)
        .then(res => {
            dispatch(getPacksTC());
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(error => {
            dispatch(setAppErrorAC(error))
        })
}