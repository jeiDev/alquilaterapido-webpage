import useStateAuth from "./states/auth.state"
import useStatePublication from "./states/publication.state";

const useGlobalState = () => {
    return {
        auth: useStateAuth(),
        publication: useStatePublication()
    }
}

export default useGlobalState;