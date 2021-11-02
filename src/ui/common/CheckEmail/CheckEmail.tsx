import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from "./CheckEmail.module.scss";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";

export const CheckEmail = () => {
    return (
        <div  className={styles.checkEmailArea}>
            <h2 className={styles.h2Style}>it-incubator</h2>
            < div className={styles.envelope}>
                <FontAwesomeIcon className= {styles.iconEnvelope} icon={faEnvelopeOpenText}/>
            </div>
            <h3 className={styles.h3Style}>Check Email</h3>
            <p>We’ve sent an Email with instructions to example@mail.com</p>
        </div>
    )
}