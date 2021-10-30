import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Preloader.module.scss';
import {AppRootStateType} from "../../../bll/store";
import {RequestStatusType} from "../../../bll/app-reducer";

export const Preloader = () => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    if (status !=="loading")
        return null;

    return (
        <div>
        <div className={styles.preloader}></div>
        </div>
    )
}