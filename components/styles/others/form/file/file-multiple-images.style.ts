import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container: {
        width: "100%",
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column"
    },

    boxViewImage: {
        border: "1px solid #315ef51c",
        width: "100%",
        height: 75,
        display: "flex",
        alignItems: "center",
        padding: "0 5px",
        overflow: "hidden",
        borderRadius: 5,
        background: "rgba(0,0,0,.01)",
    },

    pViewImage: {
        fontSize: ".9em",
        color: "rgba(0,0,0,.7)"
    },

    boxFile: {
        position: "relative",
        flex: "1 1 auto",
        background: "#EDEDED 0% 0% no-repeat padding-box",
        border: "1px dashed #707070",
        borderRadius: 5,
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    
    file: {
        opacity: 0,
        position: "absolute",
        zIndex: 500,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        cursor: "pointer"
    },

    fileText: {
        color: "#707070"
    },

    fileButton: {
        backgroundColor: "#12A4C9",
        color: "white",
        width: 149,
        height: 29,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    contentImage: {
        height: "100%",
        width: "100%",
        overflow: "hidden",
        overflowX: "auto",
        display: "flex",
        alignItems: "center"
    },

    boxImage: {
        width: 60,
        height: 60,
        overflow: "hidden",
        marginRight: 15,
        borderRadius: 5,
        position: "relative"
    },
    
    bgImage: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 50
    },

    image: {
        position: "absolute",
        height: "100%",
        width: "100%",
        objectFit: "contain",
    },

    boxDelete: {
        position: "absolute",
        backgroundColor: "red",
        color: "white",
        height: 15,
        width: 15,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 2.5,
        top: 2.5,
        cursor: "pointer",
        zIndex: 100,
        opacity: .2,
        transition: "all ease .2s",
        "&:hover": {
            opacity: 1
        }
    },

    delete: {
        fontSize: ".7em",
        fontWeight: "bold",
        position: "relative",
        top: -1.5,
        left: 0.2 
    }
}))

export default useStyles