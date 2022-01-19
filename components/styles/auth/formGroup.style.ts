import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    formGroup: {
        marginBottom: 10
    },

    label: {
        fontWeight: 500,
        fontSize: ".9em",
        paddingBottom: 5
    },

    boxInput: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#EDEDED",
        borderRadius: 5,
    },

    errorBoxInput: {
        border: "1px solid red",
    },

    boxIconInput: {
        padding: "0 10px",
    },

    icon: {
        color: "var(--primary)",
        fontSize: ".8em",
        position: "relative",
        top: -1
    },

    input: {
        border: "none",
        backgroundColor: "transparent",
        padding: "8px 5px 8px 0",
        fontSize: ".9em",
        flex: "1 1 auto",
        "&:focus":{
            outline: "none",
            borderColor: "inherit",
            "-webkit-box-shadow": "none",
            boxShadow: "none",
            backgroundColor: "transparent",
            border: "none",
        }
    }

}))

export default useStyles