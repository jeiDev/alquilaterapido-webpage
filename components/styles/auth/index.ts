import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    main: {
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    card: {
        position: "relative",
        border: "1.5px solid var(--primary)",
        borderRadius: 10,
        boxShadow: "0 0 10px 1px #00000014",
        paddingBottom: 20,
        minWidth: 500,
        maxWidth: 500,
    },

    cardBody: {
        boxSizing: "border-box",
        padding: "0 75px",
        paddingTop: 50,
        paddingBottom: 10,
        maxWidth: 500,
    },

    containerLogo: {
        width: "calc(100% - 1.25rem)",
        top: 0,
        left: 0,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        height: 40,
    },

    boxLogo: {
        top: -40,
        position: "absolute",
        height: 80,
        width: 80,
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "white",
        border: "1.5px solid var(--primary)",
    },

    imgLogo: {
        height: "60%",
        objectFit: "contain",
    },

    title: {
        textAlign: "center",
        fontSize: "1.6em",
        fontWeight: 600,
        padding: "0 23px",
    },

    boxSocial: {
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
    },

    submit: {
        backgroundColor: "var(--primary)",
        color: "var(--colorPrimary)",
        width: "100%",
        border: "none",
        padding: "10px",
        margin: "20px 0 10px 0",
        borderRadius: "5px",
        cursor: "pointer"
    },

    submitDisabled: {
        cursor: "no-drop"
    },
    
    boxLink: {
       textAlign: "center"
    },

    link: {
        color: "var(--primary)",
        borderBottom: "1.5px solid var(--primary)",
        paddingBottom: 3
    },

    socialBox: {
        marginRight: 15,
        width: 35,
        height: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        border: "1px solid rgba(0,0,0,.2)",
        fontSize: "1.2em",
        cursor: "pointer",
        opacity: .5,
        "&:hover": {
            opacity: .8
        },
        "&:last-child": {
            marginRight: 0
        }
    }
}))

export default useStyles