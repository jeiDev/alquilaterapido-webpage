import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    contentInput: {
        display: "flex",
        backgroundColor: "#EDEDED",
        padding: "7px 15px",
        overflow: "hidden",
        marginTop: 5,
        borderRadius: 5,
        alignItems: "center",
    },

    input: {
        flex: "1 1 auto",
        backgroundColor: "transparent",
        border: "none",
        width:" 100%",
        fontSize: ".85em",
        padding: "8px 5px",
        "&:hover": {
            outline: "none"
        },
        "&:focus": {
            outline: "none"
        }
    },

    icon: {
        opacity: .5,
        fontSize: ".85em",
        display: "flex",
        alignItems: "center",
        minWidth: 28,
        width: 28,
        height: "100%",
    },
    iconRight: {
        marginRight: 10,
        width: 0,
        minWidth: 0
    }
}))

export default useStyles