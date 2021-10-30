import React from 'react';
import styles from './CustomAlert.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {AppRootStateType} from "../../../bll/store";
import {useDispatch, useSelector} from 'react-redux';
import {setAppErrorAC} from "../../../bll/app-reducer";


export const CustomAlert = () => {
    const dispatch = useDispatch()
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error);

    if (error === null) {
        return null;
    }

    const handleClose = () => {
        dispatch(setAppErrorAC(null))
    }

    return (

        <div className={styles.alert}>
            <span className={styles.exclamation}><FontAwesomeIcon icon={faExclamationCircle}/></span>
            <span className={styles.message}>{error}</span>
            <span onClick={handleClose} className={styles.closeBtn}>
                <FontAwesomeIcon icon={faTimesCircle}/>
            </span>
        </div>
    )

}

