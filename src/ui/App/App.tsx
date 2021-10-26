import React from 'react';
import styles from "./App.module.scss"
import {Routes} from "../routes/Routes";


function App() {
    return (

        <div className={styles.commonStyles}>
            <Routes/>
        </div>
    )
}

export default App;
