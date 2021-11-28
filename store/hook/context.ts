import { createContext } from "react"
import { HookI } from "~/interfaces";

const Context = createContext<HookI>({
    auth: null,
    publication: null
})

export default Context;