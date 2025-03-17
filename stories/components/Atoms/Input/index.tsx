import React, { forwardRef } from "react"
import * as Types from './type';

const Input = React.forwardRef<HTMLInputElement, Types.InputProps>((props, forwardRef) => {
    const { inputClassName, onChange, children } = props;

    return (
        <input
            className={`${inputClassName}`}
            onChange={onChange}
        >
            {children}
        </input>
    )
})

export { Input };