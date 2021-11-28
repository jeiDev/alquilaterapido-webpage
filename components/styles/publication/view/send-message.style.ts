import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    containerChat: {
        borderRadius: 5,
        border: "1px solid rgba(0,0,0,.6)",
        boxSizing: "border-box",
        padding: "2.5px",
    },

    infoChat: {
        width: "100%",
        color: "white",
        fontWeight: 600,
        background: "var(--secondary)",
        textAlign: "center",
        padding: "5px 0",
        borderRadius: 5
    },

    messageWrite: {
        border: "none",
        resize: "none",
        width: "100%",
        minHeight: 100,
        maxHeight: 100,
        boxSizing: "border-box",
        padding: "5px 10px",
        fonSize: "1em",
        "&:focus": {
            outline: "none"
        },
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },

    boxButton: {
        display: "flex",
        justifyContent: "flex-end",
    },

    btnSend: {
        backgroundColor: "#18cb5a",
        color: "white",
        cursor: "pointer",
        padding: "5px 15px",
        fontSize: ".9em",
    },

    boxWhatsapp: {
        backgroundColor: "#18cb5a",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        padding: 8,
        fontSize: ".9em",
        borderRadius: 5,
        marginTop: 15,
        cursor: "pointer"
    }
}))

export default useStyles