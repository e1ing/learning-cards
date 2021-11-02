import React from 'react';
import {useFormik} from "formik";
import styles from "./PasswordRecovery.module.scss";
import {CustomInput} from "../common/CustomInput/CustomInput";
import {CustomButton} from "../common/CustomButton/CustomButton";
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";


type FormikErrorType = {
    email?: string
}

export const PasswordRecovery = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            /*dispatch(loginTC(values));*/
            formik.resetForm();
        },
    })

    return (
        <div className={styles.passwordRecoveryArea}>
            <h2 className={styles.h2Style}>it-incubator</h2>
            <h3 className={styles.h3Style}>Forgot your password?</h3>
            <form onSubmit={formik.handleSubmit} className={styles.passwordRecoveryForm}>

                <CustomInput type={"email"} placeholder={"Email"}
                             {...formik.getFieldProps('email')}/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <p className={styles.text}>
                    Enter your email address and we will send you further instructions
                </p>
                <div className={styles.instructionsBtn}>
                <CustomButton type={"submit"}>Send instructions</CustomButton>
                </div>
            </form>
            <p className={styles.text}>
                Did you remember your password?
            </p>

            <NavLink className={styles.loggingInLink} to={PATH.REGISTRATION} style={{textDecoration: "none"}}>
                Try logging in
            </NavLink>

        </div>
    )
}