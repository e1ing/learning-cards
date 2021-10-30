import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './CustomButton.module.scss';

type DefaultButtonPropsType =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type CustomButtonPropsType = DefaultButtonPropsType /*& {errorCase: boolean}*/

export const CustomButton: FC<CustomButtonPropsType> = ({className, ...restProps}) => {

   /* const finalClassName = `${errorCase ? styles.errorCase : styles.default} ${className}`;*/

    return (
     <button
         className={styles.button}
         {...restProps}
         >
     </button>
 )
}
