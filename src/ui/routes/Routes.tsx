import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Profile} from "../Profile/Profile";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {UpdatePassword} from "../UpdatePassword/UpdatePassword";
import {Registration} from "../Registration/Registration";
import {Login} from "../Login/Login";

const PATH = {
    LOGIN: "/login",
    PROFILE: "/profile",
    PASSWORD_RECOVERY: "/password-recovery",
    UPDATE_PASSWORD: "/update-password",
    REGISTRATION: "/registration"
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.UPDATE_PASSWORD} render={() => <UpdatePassword/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
            </Switch>
        </div>
    )
}