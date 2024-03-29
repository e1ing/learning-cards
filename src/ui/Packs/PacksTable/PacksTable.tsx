import React, {FC} from 'react';
import styles from './PackListTble.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {PackType} from "../../../dal/api";
import {Pack} from "../Pack/Pack";

export type CustomTablePropsType = {}

const PacksTable: FC<CustomTablePropsType> = () => {
    const packs = useSelector<AppRootStateType, Array<PackType>>(state => state.packsReducer.packs)

    const pack = packs.map(p => {
        return (
            <tr key={p._id}>
                <Pack pack={p}/>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead className={styles.packHeader}>
                <tr>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Last Updated</th>
                    <th>Created by</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {pack}
                </tbody>
            </table>
        </div>
    )
}