import React, { forwardRef } from "react"
import * as Types from './type';

const Button = React.forwardRef<HTMLButtonElement, Types.ButtonProps>((props, forwardRef) => {
    const { children, onClick, ...rest } = props;
    const btnClassName = "";

    return (
        <button ref={forwardRef} className={btnClassName} {...rest} onClick={onClick}>{children}</button>
    )
})

const IconButton = React.forwardRef<HTMLButtonElement, Types.ButtonProps>((props, forwardRef) => {
    const { btnImgSrc, btnImgAlt, btnOn, onClick } = props;
    const btnClassName = btnOn ? "on" : "" ;

    return (
        <button 
            className={`
                btnClassName
                ${btnClassName}
            `} 
            onClick={onClick}
        >
            <img src={btnImgSrc} alt={btnImgAlt} />
        </button>
    )
})

export { Button, IconButton };