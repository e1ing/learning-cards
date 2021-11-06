import React from 'react';
import {useFormik} from "formik";
import styles from "./PasswordUpdate.module.scss";
import {CustomInput} from "../common/CustomInput/CustomInput";
import {CustomButton} from "../common/CustomButton/CustomButton";


type FormikErrorType = {
    password?: string
}

export const PasswordUpdate = () => {
    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'Email is required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be more then 3 characters';
            }
            return errors;
        },
        onSubmit: values => {
            /*dispatch(loginTC(values));*/
            formik.resetForm();
        },
    })

    return (
        <div className={styles.updatePasswordArea}>
            <h2 className={styles.h2Style}>it-incubator</h2>
            <h3 className={styles.h3Style}>Create new password</h3>
            <form onSubmit={formik.handleSubmit} className={styles.updatePasswordForm}>

                <CustomInput type={"password"} placeholder={"Password"}
                             {...formik.getFieldProps('password')}/>
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <p className={styles.text}>
                    Create new password and we will send you further instructions to email
                </p>
                <div className={styles.createPasswordBtn}>
                    <CustomButton type={"submit"}>Create new password</CustomButton>
                </div>
            </form>

        </div>
    )
}
