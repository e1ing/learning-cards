import {useFormik} from 'formik';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {CustomButton} from '../common/CustomButton/CustomButton';
import {CustomInput} from "../common/CustomInput/CustomInput";
import {PATH} from '../routes/Routes';
import styles from './Login.module.scss';
import styleButton from '../common/CustomButton/CustomButton.module.scss';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be more then 3 characters';
            }
            return errors;
        },
        onSubmit: values => {

        },
    })
    return (
        <div className={styles.loginArea}>
            <h2 className={styles.h2Style}>it-incubator</h2>
            <h3 className={styles.h3Style}>Sign in</h3>
            <form className={styles.loginForm}>
                <CustomInput/>
                <CustomInput/>
                <NavLink to={PATH.PASSWORD_RECOVERY} style={{textDecoration: "none"}}>Forgot Password</NavLink>
                <CustomButton name={"Login"} type={"submit"} className={`${styleButton.customButton} ${styles.loginButton}`}>
                Login
                </CustomButton>
            </form>

            <p className={styles.title}>
                Don't have an account?
            </p>
            <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
        </div>

    )
}
