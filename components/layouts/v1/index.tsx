import Header from "./header"
import Footer from "./footer"

import { PropsLayoutI } from "~/interfaces";

const LayoutV1 = (props: PropsLayoutI) => {
 
    return (
        <>
            <Header {...props}/>
            <main>
               Page
            </main>
            <Footer {...props}/>
        </>
    )
}

export default LayoutV1;
