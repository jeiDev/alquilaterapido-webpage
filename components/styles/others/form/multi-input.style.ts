import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    formGroup: {
        marginBottom: 25,
        "& .react-tel-input": {
            display: "flex",
            "& input": {
                width: "100%!important",
                flex: "1 1 auto"
            }
        }
    },
    
    datePicker: {
        position: "relative",
        "& div>input": {
            padding: "19px 14px",
            cursor: "pointer",
            border: "1px solid #CACACA",
            "&:hover": {
                border: "1px solid black"
            },
            "&:focus": {
                border: "1.5px solid rgb(63,81,181)"
            }
        },

        "& div>div": {
            zIndex: 500
        }
    },

    labelDate: {
        position: "absolute",
        top: 0,
        zIndex: 5,
        background: "white",
        color: "rgba(0, 0, 0, 0.54)",
        padding: 0,
        fontSize: "1rem",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: 1,
        letterSpacing: "0.00938em",
        left: -13,
        transform: "translate(14px, -6px) scale(0.75)",
    }
}))

export default useStyles