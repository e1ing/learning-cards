import React from 'react';
import styles from "./App.module.scss"
import {Routes} from "../routes/Routes";
import {Preloader} from '../common/Preloader/Preloader';
import {CustomAlert} from '../common/CustomAlert/CustomAlert';
import {useDispatch} from 'react-redux';


function App() {

    const dispatch = useDispatch()

    /* useEffect(() => {
         dispatch(setInitializedTC())
     })*/


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
