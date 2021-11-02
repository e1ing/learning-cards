import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAd, faUser} from "@fortawesome/free-solid-svg-icons";
import { PATH } from '../../routes/Routes';

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <h2>It-incubator</h2>
            <div>
                <FontAwesomeIcon icon={faAd}/>
                <NavLink to={PATH.PACK_LIST}>Pack list</NavLink>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser}/>
                <NavLink to={PATH.PROFILE}> Priofile</NavLink>
            </div>

        </div>
    )
}