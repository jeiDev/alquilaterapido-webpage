import { ErrorI } from "../error.interface";

export interface InputFormGroupAuthPropsI{
    type: string
    name: string
    placeholder?: string
}

export interface MessageFormGroupAuthPropsI{
    text?: string
    type?: "danger" | "success" | "warning"
}

export interface FormGroupAuthPropsI{
    title: string
    Icon: Function
    input: InputFormGroupAuthPropsI
    message?: MessageFormGroupAuthPropsI
}

export interface SocialAuthReponseI extends ErrorI{
    data?: any
}