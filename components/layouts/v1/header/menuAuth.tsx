import Router from 'next/router'
import Link from "next/link"

import useStyles from "~/components/styles/layouts/v1/header.style"
import Context from '~/store/hook/context';
import { useContext } from 'react';

const MenuAuth = () => {
    const classes = useStyles();
    const {auth} = useContext(Context);
    const account = auth.account;

    return (
        <>
            <div>
                <div className={classes.contextPicture}>
                    <img
                        className={classes.imgContentPicture}
                        src="https://static1.abc.es/media/summum/2019/11/22/elon-musk-congreso-afp-kIVF--1200x630@abc.jpg"
                        onClick={() => {
                            return Router.push('/profile')
                        }}
                    />
                </div>
            </div>
            <div className={classes.boxPublication}>
                <Link href="/publication/create">
                    <a className={classes.btnPublication}>
                        <span>Publicar</span>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default MenuAuth;