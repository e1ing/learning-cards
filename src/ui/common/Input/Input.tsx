
import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react'
import styles from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type CustomInputPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}
export const CustomInput: FC<CustomInputPropsType> = ({onChange, onChangeText,
                                                          onKeyPress, onEnter,
                                                          error,
                                                          className,
                                                          ...restProps}) => {
    return (
        <input/>
    )
}