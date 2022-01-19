import Router from "next/router";
import { useContext, useEffect } from "react";
import { AuthMiddlewareI } from "~/interfaces/middleware/auth.interface";
import accountProvider from "~/providers/account.provider";
import Context from "~/store/hook/context";

const AuthorizationMiddleware = ({children, goAuth = true}: AuthMiddlewareI) => {
    const {auth} = useContext(Context);

    useEffect(() => {
        if(typeof auth.isAuth === "boolean") return;
        if(!localStorage.auth) return auth.setIsAuth(false);

        accountProvider.me().then(res => {
            if(res.error) {
                delete localStorage.auth;
                return auth.setIsAuth(false);
            }

            auth.setIsAuth(true);
            auth.setAccount(res.data);
        });

    }, [auth.isAuth, auth.account]);
    
    if(auth.isAuth === null) return null;

    if(goAuth && auth.isAuth === false) {
        Router.push("/auth/signin")
        return null;
    } 

    return (
        <>
            {children}
        </>
    );
}

export default AuthorizationMiddleware;