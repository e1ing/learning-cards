import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react'
import styles from './CustomInput.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type CustomInputPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onEnter?: () => void
    spanClassName?: string
}
export const CustomInput: FC<CustomInputPropsType> = ({onChange,
                                                          onKeyPress, onEnter,
                                                          className,
                                                          ...restProps}) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }
    return (
        <input
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            className={styles.customInput}
            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
    )
}