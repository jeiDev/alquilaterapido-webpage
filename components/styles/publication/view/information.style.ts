import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    contentInformations: {
        padding: "0 18px",
        paddingTop: 8,
        width: "100%"
    },

    borderInfo: {
        borderBottom: "1px solid rgba(0,0,0,.1)",
        fontSize: ".9em",
        padding: "1.2em 0"
    },

    title: {
        color: "rgba(0,0,0,.6)"
    }
}))

export default useStyles