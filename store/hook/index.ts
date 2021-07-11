import useStateAuth from "./states/auth.state"

const useGlobalState = () => {
    return {
        auth: useStateAuth(),
    }
}

export default useGlobalState;