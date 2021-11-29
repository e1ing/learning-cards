import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './CustomButton.module.scss';

type DefaultButtonPropsType =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type CustomButtonPropsType = DefaultButtonPropsType & {btnColor: string}


export const CustomActionButton: FC<CustomButtonPropsType> = ({btnColor, ...restProps}) => {

    return (
        <button
            style={{background: btnColor}}
            className={styles.button}
            {...restProps}
        >
        </button>
    )
}
