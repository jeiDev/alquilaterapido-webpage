import {ReactNode, ChangeEvent} from "react"

export interface InputPropsI {
    value?: string | number
    name: string
    iconLeft?: Function
    iconRight?: Function
    onChange?: Function
}

export interface TextareaPropsI {
    value?: string
    name: string
}

export interface SelectItemI {
    title: string | number
    key: string | number
}

export interface SelectPropsI {
    items: Array<SelectItemI>
    name: string
    placeholder?: string
    defaultIndex?: number
    icon?: Function
}
export interface FromGroupPropsI {
    title: string
    children: ReactNode
    className?: string
}

export interface MimeI {

}

export interface MultiInputPropsI {
    type: string 
    value?: string | number | Date
    setValue?: any
    title?: string | number 
    name?: string
    defaultValue?: string | number 
    disabled?: boolean
}