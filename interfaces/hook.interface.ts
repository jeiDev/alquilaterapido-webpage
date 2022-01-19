import { DataCreateI } from ".";
import { AccountI } from "./account/account.interface";
import { PublicationI } from "./publication/publication.interface";

export interface PublicationHookI{
    setDataCreate: Function
    dataCreate: DataCreateI
    publications: Array<PublicationI> 
    setPublications: Function
    publication: PublicationI
    setPublication: Function
}

export interface AuthHookI{
    account: AccountI
    setAccount: Function
    isAuth: boolean
    setIsAuth: Function
}

export interface HookI{
    publication?: PublicationHookI
    auth?: AuthHookI
}