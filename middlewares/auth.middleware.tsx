import Router from "next/router";
import { useContext, useEffect } from "react";
import { AuthMiddlewareI } from "~/interfaces/middleware/auth.interface";
import accountProvider from "~/providers/account.provider";
import Context from "~/store/hook/context";

const AuthMiddleware = ({children}: AuthMiddlewareI) => {
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
    if(auth.isAuth === true) {
        Router.push("/");
        return null
    }
    
    
    return (
        <>
            {children}
        </>
    );
}

export default AuthMiddleware;