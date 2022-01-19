import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    publicationInfo: {
        display: "flex",
        flexDirection: "column",
    },

    priceInfo: {
        fontWeight: "bold"
    },

    titleInfo: {
        fontSize: "1.1em",
        padding: "10px 0",
        margin: 0,
    },

    addressInfo: {
        fontSize: ".95em",
        fontWeight: "bold",
        color: "rgba(0,0,0,.4)"
    },

    dateInfo: {
        fontSize: ".75em",
        fontWeight: 500,
        color: "rgba(0,0,0,.4)"
    }
}))

export default useStyles