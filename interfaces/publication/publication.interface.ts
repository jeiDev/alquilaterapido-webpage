import { ErrorI } from "../error.interface";


export interface PublicationI {
    createdAt: string
    currencyPrice: string
    description: string
    price: number
    title: string
    type: string
    updatedAt: string
    uuid: string
    images: Array<string>
}

export interface PublicationResponseI extends ErrorI{
    data?: PublicationI
}

export interface PublicationArrayResponseI extends ErrorI{
    data?: Array<PublicationI>
}
