import { useState, useEffect } from "react"

const useStateAuth = () => {
    const [account, setAccount] = useState({
       
    });

    return {
        account, 
        setAccount
    }
}

export default useStateAuth;