import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Profile} from "../Profile/Profile";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {PasswordUpdate} from "../PasswordUpdate/PasswordUpdate";
import {Registration} from "../Registration/Registration";
import {Login} from "../Login/Login";
import {CheckEmail} from "../CheckEmail/CheckEmail";
import {PackList} from "../common/PackList/PackList";

export const PATH = {
    LOGIN: "/login",
    PROFILE: "/profile",
    PASSWORD_RECOVERY: "/password-recovery",
    UPDATE_PASSWORD: "/password-update/:token",
    REGISTRATION: "/registration",
    CHECK_EMAIL: "/check-email",
    PACK_LIST: "/pack-list"
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.UPDATE_PASSWORD} render={() => <PasswordUpdate/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.CHECK_EMAIL} render={() => <CheckEmail/>}/>
                <Route path={PATH.PACK_LIST} render={() => <PackList/>}/>
            </Switch>
        </div>
    )
}