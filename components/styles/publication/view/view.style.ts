import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    boxInfo: {
        paddingLeft: 50,
        "& >div": {
            borderBottom: "1px solid #eaeaea",
            padding: "25px 0",
        },
        "& >div:last-child": {
            borderBottom: 0,
            paddingBottom: "none",
        }
    },

    sideRight: {
        width: "100%",
        display: "flex",
        minHeight: 400,
        paddingLeft: 50
    },

    sideRow: {
        width: "100%",
        backgroundColor: "#e8e8e8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2em",
        color: "rgba(0,0,0,.4)",
    }
}))

export default useStyles