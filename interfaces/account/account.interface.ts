import { ErrorI } from "../error.interface";

export interface AccountI {
    uuid: string
    firstName: string
    lastName: string
    email: string
    verifyEmail: boolean
    createdAt: Date
    updatedAt: Date
}

export interface AccountResponseI extends ErrorI{
    data?: AccountI
}
