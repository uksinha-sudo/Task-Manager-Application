import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: String;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    loading?: boolean;
    disable?: boolean;
}

const buttonSizes = {
    "sm": "w-16",
    "md": "w-24",
    "lg": "w-30"
}

const buttonVariant = {
    "primary": "bg-blue-300 hover:bg-blue-500 px-2 py-2",
    "secondary": "bg-blue-300 hover:bg-blue-500 px-2 py-2"
}

const defaultStyles = "rounded transition-all text-white"


export const Button = (props:ButtonProps) => {
    return (
        <button className={`${defaultStyles} ${buttonVariant[props.variant]} ${buttonSizes[props.size]} ${props.loading === true ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={props.onClick} disabled={props.disable} >{props.text}</button>
    )
}