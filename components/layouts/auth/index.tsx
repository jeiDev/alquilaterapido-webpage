import {useState} from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStyles from "~/components/styles/auth";

import { PropsLayoutAuthI } from "~/interfaces";
import classNames from "classnames";


const LayoutAuth = ({ children, title, form, socials = [], type, callback, submit }: PropsLayoutAuthI) => {
    const classes = useStyles()
    const [onSubmit, setOnSubmit] = useState(false);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={classes.main}>
                <div className={classes.card}>
                    <div className={classes.cardBody}>
                        <div className={classes.containerLogo}>
                            <div className={classes.boxLogo}>
                                <img className={classes.imgLogo} src="/images/logo.png" alt="logo alquilate rapido" />
                            </div>
                        </div>
                        <div>
                            <h3 className={classes.title}>{form.title}</h3>
                            <div className={classes.boxSocial}>
                                {socials.map((social, i) => {
                                    social.callback = callback;

                                    return (
                                        <div key={i} className={classes.socialBox} onClick={(e) => {
                                            if(typeof social[type] === "function"){
                                                social[type](e);
                                            }
                                        }}>
                                            <FontAwesomeIcon icon={social.icon} />
                                        </div>
                                    )
                                })}
                            </div>
                            <form onSubmit={(e) => {
                                setOnSubmit(true);
                                return submit(e, () => {
                                    setOnSubmit(false)
                                });
                            }}>
                                {children}
                                <input type="submit" className={classNames(classes.submit, onSubmit ? classes.submitDisabled : "")} value={form.submit.title}/>
                            </form>

                            <div className={classes.boxLink}>
                                <Link href={form.link.href}>
                                    <a className={classes.link}>{form.link.title}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default LayoutAuth