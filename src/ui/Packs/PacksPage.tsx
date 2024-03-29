import React, {useEffect, useState} from 'react';
import {Navigation} from '../common/Navigation/Navigation';
import styles from './PacksPage.module.scss'
import {SearchLine} from "../common/SearchLine/SearchLine";
import {CustomButton} from "../common/CustomButton/CustomButton";
import CustomRange from "../common/CustomRange/CustomRange";
import {getPacksTC} from "../../bll/packs-reducer";
import { useDispatch } from 'react-redux';

export const PackPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])


    const [searchValue, setSearchValue] = useState<string>("")
    const setSearchChangeHandler = (value: string) => {
        setSearchValue(value);
    }

    return (
        <>
            <Navigation/>
            <div className={styles.packList}>


                <div className={styles.navBlock}>
                    <p className={styles.navText}> Show packs cards</p>
                    <button className={styles.toggleBtn}>My</button>
                    <button className={styles.toggleBtn}>All</button>
                    <p className={styles.navText}> Number of cards</p>
                    <CustomRange/>
                </div>

                <div className={styles.packListArea}>

                    <h3 className={styles.h3Style}>Packs list</h3>
                <span className={styles.tools}>
                    <SearchLine onChange={setSearchChangeHandler}
                                value={searchValue}
                                placeholder="Searсh packs"/>
                    <div className={styles.btnStyle}>
                        <CustomButton>Add new pack</CustomButton>
                    </div>
                </span>

                    <div className={styles.table}>
<table>
    <thead>
    <tr>
        <td>Name</td>
        <td>Cards</td>
        <td>Last Updated</td>
        <td>Crated by</td>
        <td>Actions</td>
    </tr>
    </thead>
</table>
                    </div>

                </div>

            </div>
        </>
    )
}