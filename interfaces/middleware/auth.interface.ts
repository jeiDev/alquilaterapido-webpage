import { MiddlewareI } from ".";

export interface AuthMiddlewareI extends MiddlewareI{
    goAuth?: boolean
}