import React from 'react';
import {useSelector} from 'react-redux';
import styles from './Preloader.module.scss';
import {AppRootStateType} from "../../../bll/store";
import {RequestStatusType} from "../../../bll/app-reducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFan} from "@fortawesome/free-solid-svg-icons";

export const Preloader = () => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    if (status !=="loading")
        return null;

    return (
        <div className={styles.preloader}>
            <FontAwesomeIcon icon={faFan}/>
        </div>
    )
}