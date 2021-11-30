import React, {FC} from 'react';
import styles from './DeletePackModal.module.scss'
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

type DeletePackModalPropsType = {
    setActiveModal: (value: boolean) => void
    packId: string
}

export const DeletePackModal: FC<DeletePackModalPropsType> = ({setActiveModal, packId}) => {

    return (
        <div className={styles.modalContained}>
            <div className={styles.modalName}>
                Delete Pack
                <FontAwesomeIcon className= {styles.iconEnvelope} icon={faTimes}/>
            </div>
            <div>
                Do you really want to remove Pack Name - Name Pack? All cards will be excluded from this course.
            </div>
            <div>
                <CustomButton> Cancel </CustomButton>
                <CustomButton> Delete </CustomButton>
            </div>
        </div>
    )
}