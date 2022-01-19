import { ReactNode } from "react"
import { SocialAuthReponseI } from ".";
import { SubmitEventI } from "./event.interface";

export interface PropsLayoutI {
    children: ReactNode
    title: string
}

export interface SubmitLayoutAuthI{
    title: string
}

export interface LinkLayoutAuthI{
    title: string
    href: string
}

export interface FormLayoutAuthI {
    title: string
    submit: SubmitLayoutAuthI
    link: LinkLayoutAuthI
}

export interface SocialLayoutAuthI{
    title: string
    signin: Function
    signup: Function
    icon: any
    callback?: Function
}

export interface CallbackPropsLayoutAuthI{
    (data: SocialAuthReponseI): void
}

export interface PropsLayoutAuthI{
    children: ReactNode
    title: string
    socials?: Array<SocialLayoutAuthI>
    form: FormLayoutAuthI
    type: "signin" | "signup"
    callback?: CallbackPropsLayoutAuthI
    submit: SubmitEventI
}