import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    contentCardPublication: {
        overflow: "hidden",
        boxShadow: "0px 3px 4px 1px rgb(0 0 0 / 15%)",
        display: "flex",
        flexDirection: "column",
        color: "rgba(0,0,0,.8)",
    },

    contentImage: {
        position: "relative",
        flex: "1 1 auto",
        overflow: "hidden",
    },

    boxImage: {
        width: "100%",
        height: "100%",
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },

    boxPrice: {
        position: "absolute",
        backgroundColor: "var(--primary)",
        color: "var(--colorPrimary)",
        zIndex: 1,
        bottom: 0,
        right: 0,
    },

    price: {
        fontWeight: 700,
        fontSize: ".8em",
        padding: "2.5px 8px",
    },

    contentInfo:{
        padding: "15px",
        boxSizing: "border-box",
        overflow: "hidden",
        fontSize: ".9em",
        minHeight: 85,
        height: 85,
    },

    title: {
        fontWeight: 700,
    },

    address: {
        color: "rgba(0,0,0,.4)",
        fontSize: ".8em",
        paddingBottom: 8
    },

    boxIcons: {
        display: "flex",
        fontSize: ".9em",
    },

    icon: {
        padding: "0 8px",
        "&:first-child": {
            paddingLeft: 0
        },
        "&:last-child": {
            paddingRight: 0
        }
    },

    imgIcon: {
        width: 15
    },

    bar: {
        paddingLeft: 8
    }
}));

export default useStyles;