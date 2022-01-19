import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    containerSlides: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },

    boxShowImage: {
        width: "100%",
        height: 400,
        "& > img": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },

    boxCarousel: {
        overflow: "hidden",
        display: "flex",
        marginTop: 20
    },

    contentCarousel: {
        overflow: "hidden",
        width: 80,
        height: 80,
        marginRight: 15,
        borderRadius: 5,
        cursor: "pointer",
        opacity: .5,
        transition: "all ease .4s",
        "&:hover": {
            opacity: 1
        },
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    }
}))

export default useStyles