import React, {useState} from 'react';
import {Navigation} from '../common/Navigation/Navigation';
import styles from './PacksList.module.scss'
import {SearchLine} from "../common/SearchLine/SearchLine";
import {CustomButton} from "../common/CustomButton/CustomButton";
import CustomSlider from "../common/CustomSlider/CustomSlider";

export const PackList = () => {

    /* const name = useSelector<AppRootStateType, string>(state => state.packs.name);*/
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
                    <CustomSlider/>
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

                    </div>

                </div>

            </div>
        </>
    )
}