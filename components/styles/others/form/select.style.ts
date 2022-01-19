import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    container:{
        position: "relative",
        cursor: "pointer"
    },

    box: {
        display: "flex",
        backgroundColor: "#EDEDED",
        padding: "14px 15px",
        marginTop: 5,
        overflow: "hidden",
        borderRadius: 5,
        alignItems: "center"
    },

    input:{
        flex: "1 1 auto",
        backgroundColor: "transparent",
        border: "none",
        width:" 100%",
        fontSize: ".85em",
        cursor: "pointer",
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
        minWidth: 25,
        width: 25,
        height: "100%",
    },

    iconLeft: {
        paddingRight: 8,
        marginRight: 3
    },

    iconRight:{
        paddingLeft: 8,
        fontSize: ".85em",
        opacity: .6,
        width: "initial",
        minWidth: "initial",
    },

    containerItems: {
        position: "absolute",
        width: "100%",
        zIndex: 500,
        maxHeight: 0,
        // height: 0,
        transition: "all ease .3s"
    },

    containerItemsActive: {
        maxHeight: 150
    },

    boxItems: {
        boxShadow: "1px 2px 4px -1px rgb(0 0 0 / 10%)",
        backgroundColor: "white",
        margin: 0,
        padding: 0,
        height: "100%",
        overflow: "hidden",
        "&::-webkit-scrollbar": {
            width: 5
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "#a9a9a97a"
        },
        "&::-webkit-scrollbar-thumb": {
            boxShadow: "inset 0 0 6px rgba(0, 0, 0, .1)",
            backgroundColor: "rgba(0,0,0,.1)"
        }
    },

    item: {
        padding: "8px 15px",
        fontSize: ".9em",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,.05)"
        }
    }
}))

export default useStyles