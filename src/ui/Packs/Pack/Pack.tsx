import React, {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import {PackType} from "../../../dal/api";
import {CustomActionButton} from "../../common/CustomActionButton/CustomActionButton";
import {AppRootStateType} from "../../../bll/store";
import {authReducer} from "../../../bll/auth-reducer/auth-reducer";


type PackPropsType = {
    pack: PackType
}

export const Pack: FC<PackPropsType> = React.memo(({pack}) => {

    const userId =  useSelector<AppRootStateType, string> = (state => state.authReducer.profile)

    const [deletePackModal, setDeletePackModal] = useState<boolean>(false)
    const [editPackModal, setEditPackModal] = useState<boolean>(false)
    const openDeletePackModal = () => setDeletePackModal(true)
    const openEditPackModal = () => setEditPackModal(true)

    return (
        <>
            <td>{pack.name}</td>
            <td>{pack.cardsCount}</td>
            <td>{pack.updated}</td>
            <td>{pack.user_name}</td>
            <td>
                    <CustomActionButton btnColor={"red"} onClick={openDeletePackModal}>Delete</CustomActionButton>
                    <CustomActionButton btnColor={"#D7D8EF"} onClick={openEditPackModal}>Edit</CustomActionButton>
                    <CustomActionButton btnColor={"#D7D8EF"}>Learn</CustomActionButton>
            </td>

            {}

        </>
    )

});