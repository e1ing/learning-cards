import React, {useEffect} from 'react';
import styles from "./App.module.scss"
import {Routes} from "../routes/Routes";
import {Preloader} from '../common/Preloader/Preloader';
import {CustomAlert} from '../common/CustomAlert/CustomAlert';
import {AppRootStateType} from '../../bll/store';
import {useDispatch, useSelector} from 'react-redux';
import {setInitializedTC} from "../../bll/app-reducer";


function App() {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setInitializedTC())
    })


   /* const logoutHandler = () => {
        dispatch(logoutTC())
    }*/

    return (
        <div className={styles.commonStyles}>
            <Routes/>
            <Preloader/>
            <CustomAlert/>
        </div>
    )
}

export default App;
