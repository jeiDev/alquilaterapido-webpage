import Head from "next/head"
import Link from "next/link"
import { PropsLayoutI } from "~/interfaces"

import MenuAuth from "./menuAuth"
import MenuNoAuth from "./menuNoAutjh"

import useStyles from "~/components/styles/layouts/v1/header.style"
import { useContext } from "react"
import Context from "~/store/hook/context"

const Header = ({ title }: PropsLayoutI) => {
    const classes = useStyles()
    
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={classes.header}>
                <div className="container">
                    <div className={classes.box}>
                        <Header.Logo />
                        <Header.Menu />
                    </div>
                </div>
            </header>
        </>
    )
}

Header.Logo = () => {
    const classes = useStyles()
    return (
        <div className={classes.logo}>
            <Link href="/">
                <a>
                    <img className={classes.img} src="/images/logo-letter.png" />
                </a>
            </Link>
        </div>
    )
}

Header.Menu = () => {
    const classes = useStyles();
    const {auth} = useContext(Context);

    return (
        <div className={classes.sectionProfile}>
            {auth.isAuth ? <MenuAuth /> : <MenuNoAuth />}
        </div>
    )
};

export default Header;
