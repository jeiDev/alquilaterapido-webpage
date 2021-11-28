import { MiddlewareI } from ".";

export interface AutorizationMiddlewareI extends MiddlewareI{
    goAuth?: boolean
}