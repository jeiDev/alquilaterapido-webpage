import Header from "./header"
import Footer from "./footer"

import { PropsLayoutI } from "~/interfaces";

import useStyles from "~/components/styles/layouts/v1"

const LayoutV1 = (props: PropsLayoutI) => {
    const classes = useStyles()

    return (
        <>
            <Header {...props}/>
            <main className={classes.main}>
               <div className="container">{props.children}</div>
            </main>
            <Footer {...props}/>
        </>
    )
}

export default LayoutV1;
