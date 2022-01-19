import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    form: {
        marginTop: 40
    },

    boxImgProfile: {
        width: 200,
        height: 200,
        overflow: "hidden",
        borderRadius: "50%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    img: {
        height: "100%",
        width: "100%",
        objectFit: "cover"
    },

    boxIcon: {
        position: "absolute",
        zIndex: 2,
        opacity: 0,
        cursor: "pointer",
        transition: "all ease .4s",
        "&:hover": {
            opacity: .5
        }
    },

    activeIcon: {
        opacity: .5
    },

    icon: {
        color: "white",
        fontSize: "3em"
    },

    boxButton: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
    },

    btn: {
        backgroundColor: "var(--primary)",
        color: "white",
        border: "none",
        padding: "15px 40px",
        borderRadius: 5,
        cursor: "pointer"
    }
}))

export default useStyles