import { makeStyles } from '@material-ui/core/styles';

const login = {
    fontSize: ".9em",
    color: "rgba(0,0,0,.8)",
    cursor: "pointer",
    marginRight: "15px"
}

const useStyles = makeStyles((theme) => ({
    header: {
        position: "relative",
        width: "100%",
        height: "80px",
        borderBottom: "1px solid rgba(0,0,0,.1)",
        padding: "10px 0",
        backgroundColor: "white",
        boxShadow: "0px 4px 3px 0px #00000014",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex"
    },
    box: {
        display: "flex",
        height: "100%"
    },
    img: {
        height: "100%",
        objectFit: "contain"
    },
    logo: {
        padding: "10px 0",
    },
    sectionProfile: {
        flex: "1 1 auto",
        marginLeft: "30px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    contextPicture: {
        height: "40px",
        width: "40px",
        overflow: "hidden",
        borderRadius: "50%",
        border: "2px solid #65888d",
    },
    imgContentPicture: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        cursor: "pointer",
    },
    boxPublication: {
        paddingLeft: "16px"
    },
    btnPublication: {
        backgroundColor: "var(--primary)",
        color: "var(--colorPrimary)",
        padding: "5px 15px",
        borderRadius: "30px",
        fontSize: ".85em",
        cursor: "pointer",
        "&:hover": {
            color: "var(--colorPrimary)"
        }
    },
    loginDesk: {
        ...login,
        "&:hover": {
            color: "var(--primary)"
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    loginMobile: {
        ...login,
        display: "none",
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    }
}));

export default useStyles;