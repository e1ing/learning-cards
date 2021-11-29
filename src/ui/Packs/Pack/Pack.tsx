import React, {FC} from 'react';
import {PackType} from "../../../dal/api";
import {CustomActionButton} from "../../common/CustomActionButton/CustomActionButton";

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
                    <CustomActionButton btnColor={"red"}>Delete</CustomActionButton>
                    <CustomActionButton btnColor={"#D7D8EF"}>Edit</CustomActionButton>
                    <CustomActionButton btnColor={"#D7D8EF"}>Learn</CustomActionButton>
            </td>
        </>
    )
}