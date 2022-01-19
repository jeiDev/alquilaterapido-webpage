import { makeStyles } from '@material-ui/core/styles'

const colorSecondary = "#929494"

const useStyles = makeStyles(() => ({
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    barContainer: {
        display: "flex",
        justifyContent: "center"
    },

    barBox: {
        display: "flex",
        justifyContent: "center",
    },

    circle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: 25,
        width: 25,
        borderRadius: "50%",
        backgroundColor: colorSecondary,
        fontSize: ".9em",
        cursor: "pointer",
        color: "white",
        marginLeft: 15,
        "&:first-child": {
            marginLeft: 0
        },
        "&:first-child:before": {
           display: "none"
        },
        "&::before": {
            position: "absolute",
            content: '""',
            height: 5,
            width: 15,
            left: -15,
            backgroundColor: colorSecondary
        }
    },

    circleActive: {
        backgroundColor: "var(--primary)",
        "&::before": {
            backgroundColor: "var(--primary)"
        }
    },

    title: {
        color: "var(--primary)",
        marginBottom: 30,
        fontSize: "1.55em",
        textAlign: "center"
    },

    content: {
        maxWidth: 800,
        width: "100%",
        minHeight: 442,
        border: "2px solid #0467746e",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 40,
        display: "flex",
        margin: "30px 0",
        justifyContent: "center"
    },

    box: {
        display: "flex",
        flexDirection: "column",
        width: 500
    },

    main: {
        flex: "1 1 auto",
        display: "flex"
    },

    mainContent: {
        flex: "1 1 auto",
        flexDirection: "column"
    },

    boxButtons: {
        display: "flex",
        justifyContent: "space-between"
    },

    button: {
        color: "white",
        fontWeight: "bold",
        maxWidth: 125,
        width: "100%",
        textAlign: "center",
        padding: 5,
        borderRadius: 5,
        opacity: .7,
        cursor: "no-drop"
    },

    back: {
        backgroundColor: colorSecondary
    },
    
    next: {
        backgroundColor: "var(--primary)"
    },

    //Step 3
    formGroup: {
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column"
    }
}))

export default useStyles