import React, { FC, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Context from '~/store/hook/context';
import useGlobalState from '~/store/hook';
import connectFirebase from '~/config/firebase.config';

connectFirebase()

const WrappedApp: FC<AppProps> = (props) => {
    const { Component, pageProps } = props
    const states = useGlobalState();

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, [])

    return (
        //@ts-ignore
        <Context.Provider value={states}>
            <Component {...props} />
        </Context.Provider>
    )
};

export default WrappedApp;
