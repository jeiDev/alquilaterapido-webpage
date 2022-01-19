import { PropsLayoutI } from "~/interfaces"
import settings from "~/settings"

import useStyles from "~/components/styles/layouts/v1/footer.style"

const Footer = (props: PropsLayoutI) => {
    const classes = useStyles()
    const { navs } = settings.footer;
    

    return (
        <footer className={classes.footer}>
             <div>
                    <ul className={classes.ul}>
                        {navs.map((row, i) => (<li className={classes.li} key={i}>{row.title}</li>))}
                    </ul>
                </div>
                <div className={classes.copy}><p className={classes.p}>Copyright © 2020 Alquilate<span className="primaryColor" style={{ fontWeight: 500 }}>Rapido</span></p></div>
        </footer>
    )
}

export default Footer;
