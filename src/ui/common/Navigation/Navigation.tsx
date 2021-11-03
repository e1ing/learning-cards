import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAd, faUser} from "@fortawesome/free-solid-svg-icons";
import {PATH} from '../../routes/Routes';

export const Navigation = () => {
    return (
        <div className={styles.navArea}>
            <div className={styles.container}>
                <h2 className={styles.h2Style}>It-incubator</h2>
                <div className={styles.toggle}>
                    <span> <FontAwesomeIcon className={styles.icon} icon={faAd}/></span>
                    <NavLink to={PATH.PACK_LIST}>Pack list</NavLink>
                </div>
                <div className={styles.toggle}>
                    <span> <FontAwesomeIcon className={styles.icon} icon={faUser}/></span>
                    <NavLink to={PATH.PROFILE}> Priofile</NavLink>
                </div>
            </div>
        </div>
    )
}