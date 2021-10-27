import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react';
import styles from './CustomButton.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLElement>
type CustomButtonPropsType = DefaultButtonPropsType & {errorCase: boolean}

export const CustomButton: FC<CustomButtonPropsType> = ({errorCase, className, ...restProps}) => {

    const finalClassName = `${errorCase ? styles.errorCase : styles.default} ${className}`;

    return (
     <button
         className={finalClassName}
         {...restProps}
         >
     </button>
 )
}
