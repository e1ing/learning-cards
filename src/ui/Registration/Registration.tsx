import React from 'react';
import {useFormik} from 'formik';
import {CustomButton} from '../common/CustomButton/CustomButton';
import {CustomInput} from "../common/CustomInput/CustomInput";
import styles from './Registration.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from "../routes/Routes";
import {registerUserTC} from "../../bll/auth-reducer/registation-reducer";
import {AppRootStateType} from '../../bll/store';
import stylesCustom from '../common/CustomButton/CustomButton.module.scss'
type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

export const Registration = () => {

    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.registration.isRegistered)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }

            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 3) {
                errors.password = "Must be more then 3 characters";
            }
            return errors;

            if (!values.confirmPassword) {
                errors.confirmPassword = "Confirm password is required";
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Passwords aren't coincide";
            }
            return errors;
        },
        onSubmit: values => {
            if (values.password === values.confirmPassword) {
                dispatch(registerUserTC(values));
                formik.resetForm();
            }

        },
    })

    if (isRegistered) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={styles.registerArea}>
            <h2 className={styles.h2Style}>it-incubator</h2>
            <h3 className={styles.h3Style}>Sign Up</h3>
            <form onSubmit={formik.handleSubmit} className={styles.registerForm}>

                <CustomInput type={"email"} placeholder={"Email"}
                             {...formik.getFieldProps('email')}/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <CustomInput type={"password"} placeholder={"Password"}
                             {...formik.getFieldProps('password')}/>
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                <CustomInput type={"password"} placeholder={"Confirm password"}
                             {...formik.getFieldProps('confirmPassword')}/>
                {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

                <div className={styles.buttonContainer}></div>
                <NavLink to={PATH.LOGIN}>
                    <CustomButton type={"submit"} className={`${styles.cancelButton} ${stylesCustom.button}`}>
                        Cancel
                    </CustomButton>
                </NavLink>
                <CustomButton type={"submit"} className={styles.registerButton}>
                    Register
                </CustomButton>
            </form>

        </div>

    )
}
