import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: "var(--secondary)",
        marginTop: 10,
        overflow: "hidden",
        padding: 12,
        paddingTop: 18,
        display: "flex",
        flexDirection: "column"
    },

    ul: {
        display: "flex",
        justifyContent: "center"
    },

    li: {
        margin: "0 10px",
        cursor: "pointer",
        color: "white",
        "&:hover": {
            color: "#6eb3f0"
        }
    },

    copy: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "rgba(255,255,255,.7)",
        fontSize: "8em",
        paddingTop: 6
    },

    p: {
        margin: 0,
        fontSize: ".1em",
        color: "rgb(167, 167, 167)"
    }
}))

export default useStyles;