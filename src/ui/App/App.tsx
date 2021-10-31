import React from 'react';
import styles from "./App.module.scss"
import {Routes} from "../routes/Routes";
import { Preloader } from '../common/Preloader/Preloader';
import { CustomAlert } from '../common/CustomAlert/CustomAlert';


function App() {
    return (

        <div className={styles.commonStyles}>
            <Routes/>
            <Preloader/>
            <CustomAlert/>
        </div>
    )
}

export default App;
