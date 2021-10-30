import React from 'react';
import styles from './CustomAlert.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamation, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

export const CustomAlert = () => {
    return (
        <div className={styles.alert}>
            <span className={styles.exclamation}><FontAwesomeIcon icon={faExclamation}/></span>
            <span className={styles.message}>Warning</span>
            <span className={styles.closeBtn}>
                <FontAwesomeIcon icon={faTimesCircle}/>
            </span>
        </div>
    )

}

