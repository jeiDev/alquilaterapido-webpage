import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    top: {
        backgroundColor: "#E9EAEA",
        padding: 50,
    },

    containerTop: {
        display: "flex",
        flexDirection: "row",
    },

    containerPicture: {
        marginRight: 55
    },

    boxPicture: {
        width: 160,
        height: 160,
        overflow: "hidden",
        borderRadius: "50%",
        border: "4px solid var(--secondary)",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    },

    info: {
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },

    infoName: {
        display: "flex",
        alignItems: "center",
    },

    boxCheck: {
        marginLeft: 5
    },

    check: {
        cursor: "pointer",
        color: "var(--secondary)",
    },

    boxDate: {
        color: "rgba(0,0,0,.4)",
        fontSize: ".9em",
        position: "relative",
        top: -2,
        fontWeight: 500,
    },

    containerValorations: {
        paddingTop: 7,
        "& > span": {
            fontSize: "1.3em",
            fontWeight: 700,
            color: "rgba(0,0,0,.3)",
        }
    },

    boxValorations: {
        display: "flex",
        alignItems: "center",
        "& > span": {
            fontSize: "1.4em",
            fontWeight: 600
        }
    },

    boxStar: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        marginLeft: 8,
        gridGap: 2,
        paddingTop: 4,
        color: "var(--primary)",
    },

    btnEdit: {
        marginTop: 20,
        color: "white",
        backgroundColor: "var(--secondary)",
        padding: "5px 15px",
        borderRadius: 8,
        cursor: "pointer",
    },

    btnLogout: {
        color: "var(--primary)",
        fontWeight: "bold",
        borderBottom: "2px solid var(--primary)",
        cursor: "pointer",
        opacity: .6,
        "&:hover": {
            opacity: 1
        }
    },

    bottom: {
        padding: "20px 50px"
    }
}))

export default useStyles