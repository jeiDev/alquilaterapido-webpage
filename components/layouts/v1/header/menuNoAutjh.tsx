import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import useStyles from "~/components/styles/layouts/v1/header.style"

const MenuNoAuth = () => {
    const classes = useStyles()

    return (
        <div>
            <Link href="/auth/signin">
                <a className={classes.loginDesk}>Iniciar Sesion</a>
            </Link>
            <Link href="/auth/signin">
                <a>
                    <FontAwesomeIcon className={classes.loginMobile} icon={faUser} />
                </a>
            </Link>  
        </div>
    )
}

export default MenuNoAuth;