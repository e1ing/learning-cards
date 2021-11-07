import React from 'react';
import {Navigation} from '../common/Navigation/Navigation';
import styles from './PacksList.module.scss'
import {SearchLine} from "../common/SearchLine/SearchLine";
import {CustomButton} from "../common/CustomButton/CustomButton";

export const PackList = () => {
    return (
        <div>
            <Navigation/>

            <div className={styles.navBlock}>
                <p> Show packs cards</p>
                <bitton></bitton>
                <bitton></bitton>
                <p> Number of cards</p>
                <CustomSlider></CustomSlider>
            </div>

            <div className={styles.packListArea}>
                <span>
                    <SearchLine/><CustomButton/>
                </span>
            </div>

        </div>
    )
}