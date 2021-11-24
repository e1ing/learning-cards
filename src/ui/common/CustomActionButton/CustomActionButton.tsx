import React, { FC} from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';
import styles from './CustomActionButton.module.scss';
import {PATH} from "../../routes/Routes";

type DefaultButtonPropsType =  NavLinkProps
type CustomButtonPropsType = DefaultButtonPropsType & {
    linkToPage: string
}
/*errorCase: boolean*/

export const CustomActionButton: FC<CustomButtonPropsType> = ({className,linkToPage}) => {
const btnColor = {backgroundColor: "#21268FFF"}
   /* const finalClassName = `${errorCase ? styles.errorCase : styles.default} ${className}`;*/

    return (
     <NavLink to={linkToPage}
         className={styles.button}
         >
     </NavLink>
 )
}
