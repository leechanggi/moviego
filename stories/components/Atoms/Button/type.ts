import React from "react";

type ButtonProps = {
    children ?: string;
    btnImgSrc ?: string;
    btnImgAlt ?: string;
    btnOn ?: boolean;
    onClick ?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type {ButtonProps}