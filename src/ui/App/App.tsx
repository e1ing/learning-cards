import React from 'react';
import styles from "./App.module.scss"
import {Routes} from "../routes/Routes";
import { Preloader } from '../common/Preloader/Preloader';


function App() {
    return (

        <div className={styles.commonStyles}>
            <Routes/>
            <Preloader/>
        </div>
    )
}

export default App;
