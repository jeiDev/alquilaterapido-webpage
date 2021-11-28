import { FormEvent } from "react";
import {MimeI} from "~/interfaces";

export const validateType = (file: File, mimes: Array<MimeI> = []) => (mimes.includes(file.type))

export const fileToUrlBlob = (file: File) => {
    const blob = new Blob([file], { type: file.type });
    return URL.createObjectURL(blob);
}

export const inputToDataObject = (e: FormEvent<HTMLFormElement>): any => {
    //@ts-ignore
    return Array.from(e.target.querySelectorAll("input")).reduce((a, b: any) => {
        if(b.name){
            a[b.name] = b.value;
        }
        return a;
    }, {})
}