import Head from "next/head"

import { PropsLayoutI } from "~/interfaces"

const Header = (props: PropsLayoutI) => {

    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <header>
                header
            </header>
        </>
    )
}

export default Header;
