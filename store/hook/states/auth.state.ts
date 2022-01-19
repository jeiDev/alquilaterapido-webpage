import { useState } from "react"

const useStateAuth = () => {
    const [isAuth, setIsAuth] = useState(null);
    const [account, setAccount] = useState({});

    return {
        account, setAccount,
        isAuth, setIsAuth
    }
}

export default useStateAuth;