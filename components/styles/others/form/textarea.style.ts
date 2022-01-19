import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    content: {
        display: "flex",
        flex: "1 1 auto",
        backgroundColor: "#EDEDED",
        padding: "15px",
        overflow: "hidden",
        borderRadius: 5,
    },

    textArea: {
        flex: "1 1 auto",
        backgroundColor: "transparent",
        border: "none",
        width:" 100%",
        fontSize: ".85em",
        resize: "none",
        height: "100%",
        paddingRight: 15,
        overflow: "hidden",
        overflowY: "auto",
        "&:hover": {
            outline: "none"
        },
        "&:focus": {
            outline: "none"
        },
        "&::-webkit-scrollbar": {
            width: 5,
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#a9a9a97a"
        },
        "&::-webkit-scrollbar-thumb": {
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, .1)",
            backgroundColor: "rgba(0,0,0,.1)"
        }
    }
}))

export default useStyles