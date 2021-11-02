import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './CustomButton.module.scss';

type DefaultButtonPropsType =  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type CustomButtonPropsType = DefaultButtonPropsType & {
}
/*errorCase: boolean*/

export const CustomButton: FC<CustomButtonPropsType> = ({className,style, ...restProps}) => {
const btnColor = {backgroundColor: "#21268FFF"}
   /* const finalClassName = `${errorCase ? styles.errorCase : styles.default} ${className}`;*/

    return (
     <button
         style = {btnColor}
         className={styles.button}
         {...restProps}
         >
     </button>
 )
}
