import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    boxSearch: {
        width: "100%",
        maxWidth: "300px",
        display: "flex",
        marginBottom: 20
    },

    input: {
        flex: "1 1 auto",
        padding: "12px 15px",
        borderRadius: "5px 0 0 5px",
        backgroundColor: "var(--backgroundInput)",
        color: "var(--colorInput)",
        border: 0,
        fontSize: ".8em",
        "&:focus": {
            outline: 0
        }
    },

    btnSearch: {
        backgroundColor: "var(--primary)",
        color: "var(--colorPrimary)",
        width: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: ".9em",
        borderRadius: "0 5px 5px 0",
    }
}))

export default useStyles