import { ErrorI } from "../error.interface";

export interface AuthSocialFirebaseReponseI extends ErrorI {
    token?: string
    payload?: object
}