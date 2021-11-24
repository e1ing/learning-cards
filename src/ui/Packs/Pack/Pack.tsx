import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {PackType} from "../../../dal/api";
import {CustomActionButton} from "../../common/CustomActionButton/CustomActionButton";
import {PATH} from '../../routes/Routes';

type PackPropsType = {
    pack: PackType
    linkToPage: string
}

export const Pack: FC<PackPropsType> = ({pack, linkToPage}) => {
    return (
        <>
            <td>{pack.name}</td>
            <td>{pack.cardsCount}</td>
            <td>{pack.updated}</td>
            <td>{pack.user_name}</td>
            <td>

                <CustomActionButton linkToPage={PATH.CARDS_LIST}>Delete</CustomActionButton>
                <CustomActionButton>Edit</CustomActionButton>
                <CustomActionButton>Learn</CustomActionButton>
            </td>
        </>
    )
}