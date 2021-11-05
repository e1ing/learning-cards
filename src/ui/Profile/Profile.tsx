import React from 'react';
import {Navigation} from '../common/Navigation/Navigation';
import {PATH} from "../routes/Routes";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../bll/store";
import {useSelector} from 'react-redux';

export const Profile = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn )

    if(!isLoggedIn){
       return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div>
            <Navigation/>
        </div>
    )
}