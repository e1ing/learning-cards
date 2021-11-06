import React from 'react';
import {useFormik} from "formik";
import styles from "./PasswordUpdate.module.scss";
import {CustomInput} from "../common/CustomInput/CustomInput";
import {CustomButton} from "../common/CustomButton/CustomButton";
import {Redirect, useParams} from 'react-router-dom';
import {passwordUpdateTC} from "../../bll/auth-reducer/password-update-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {PATH} from "../routes/Routes";

type FormikErrorType = {
    password?: string
}

export const PasswordUpdate = () => {

    const {token} = useParams<{ token: string }>();
    const dispatch = useDispatch();
    const isPasswordUpdated = useSelector<AppRootStateType, boolean>(state => state.passwordUpdate.isPasswordUpdated)

    const formik = useFormik({
        initialValues: {
            newPassword: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.newPassword) {
                errors.password = 'Email is required';
            } else if (values.newPassword.length < 8) {
                errors.password = 'Must be more then 3 characters';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(passwordUpdateTC(values.newPassword, token));
            formik.resetForm();
        },
    })

    if (isPasswordUpdated) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={styles.updatePasswordArea}>
            <h2 className={styles.h2Style}>it-incubator</h2>
            <h3 className={styles.h3Style}>Create new password</h3>
            <form onSubmit={formik.handleSubmit} className={styles.updatePasswordForm}>

                <CustomInput type={"password"} placeholder={"New password"}
                             {...formik.getFieldProps('newPassword')}/>
                {formik.errors.newPassword ? <div>{formik.errors.newPassword}</div> : null}

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
