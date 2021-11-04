import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAd, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import {PATH} from '../../routes/Routes';

export const Navigation = () => {
    return (
        <div className={styles.navArea}>
            <div className={styles.container}>
                <h2 className={styles.h2Style}>It-incubator</h2>
                <div className={styles.buttonsArea}>
                    <div className={styles.toggle}>
                        <NavLink to={PATH.PACK_LIST}>
                            {
                                <div>
                                    <FontAwesomeIcon className={styles.icon} icon={faAd}/>
                                    Pack list
                                    <span className={styles.line}/>
                                </div>
                            }
                        </NavLink>
                    </div>
                    <div className={styles.toggle}>
                        <NavLink to={PATH.PROFILE}>
                            {
                                <div>
                                    <FontAwesomeIcon className={styles.icon} icon={faUser}/>
                                    Profile
                                    <span className={styles.line}/>
                                </div>
                            }
                        </NavLink>
                    </div>
                </div>
                <FontAwesomeIcon className={styles.icon} icon={faSignOutAlt}/>
            </div>
        </div>
    )
}