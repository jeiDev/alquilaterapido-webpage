import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    profileInfo: {
        display: "flex",
        alignItems: "center",
    },

    boxPictureProfile: {
        maxWidth: 100,
        overflow: "hidden",
        marginRight: 25,
    },

    boxPicture: {
        width: 80,
        height: 80,
        overflow: "hidden",
        borderRadius: "50%",
        border: "3px solid var(--secondary)",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    },

    fullname: {
        fontWeight: 700,
        fontSize: "1.4em",
        margin: 0,
    },

    dateProfile: {
        fontSize: ".9em",
        color: "gray",
    }
}))

export default useStyles