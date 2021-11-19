import {PackType} from "../dal/api";

type InitialStateType = {
    packs: PackType[]
    packUser_id: string
};
export type PacksAT = {};

const initialState: InitialStateType = {
    packs: [],
    packUser_id: ""
}