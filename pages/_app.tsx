import React, { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

import Context from '~/store/hook/context'
import useGlobalState from '~/store/hook'

const WrappedApp: FC<AppProps> = (props) => {
    const { Component } = props
    const states = useGlobalState();

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
          jssStyles.parentElement.removeChild(jssStyles);
        }
    }, [])

    return (
        <Context.Provider value={states}>
            <Component {...props} />
        </Context.Provider>
    )
};

export default WrappedApp;
