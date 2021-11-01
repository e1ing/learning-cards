import {useFormik} from 'formik';
import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {CustomButton} from '../common/CustomButton/CustomButton';
import {CustomInput} from "../common/CustomInput/CustomInput";
import {PATH} from '../routes/Routes';
import styles from './Login.module.scss';
import {loginTC} from "../../bll/auth-reducer/login-reducer";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../bll/store";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be more then 3 characters';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values));
            formik.resetForm();
        },
    })

    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <div className={styles.loginArea}>
            <h2 className={styles.h2Style}>it-incubator</h2>
            <h3 className={styles.h3Style}>Sign In</h3>
            <form onSubmit={formik.handleSubmit} className={styles.loginForm}>

                <CustomInput type={"email"} placeholder={"Email"}
                             {...formik.getFieldProps('email')}/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <CustomInput type={"password"} placeholder={"Password"}
                             {...formik.getFieldProps('password')}/>
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <div>
                    <input className={styles.checkboxStyle} type={"checkbox"} id={"rememberMe"}
                           checked={formik.values.rememberMe}
                           {...formik.getFieldProps('rememberMe')}/>
                    <label className={styles.forgotPassLink} htmlFor="rememberMe">Remember me</label>
                </div>
                <NavLink className={styles.forgotPassLink} to={PATH.PASSWORD_RECOVERY} style={{textDecoration: "none"}}>
                    Forgot password
                </NavLink>
                <div  className={styles.loginButton}>
                <CustomButton type={"submit"}> Login</CustomButton>
                </div>
            </form>

            <p className={styles.title}>
                Don't have an account?
            </p>
            <NavLink className={styles.signUpLink} to={PATH.REGISTRATION} style={{textDecoration: "none"}}>
                Sign Up
            </NavLink>
        </div>

    )
}
