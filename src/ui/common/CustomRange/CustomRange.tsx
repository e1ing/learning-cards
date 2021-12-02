import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from "react";
import s from "./CustomRange.module.scss";
import {Range, getTrackBackground} from 'react-range';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


type RangeRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
};

const CustomRange: React.FC = () => {
    /*const {minValue, maxValue} = shop.settings;
    const [values, setValues] = useState([minValue, maxValue]);*/

    return (
        <></>
     /*   <Range
            values={values}
            step={500}
            min={minPrice}
            max={maxPrice}
        />*/

    );
}

export default CustomRange;
