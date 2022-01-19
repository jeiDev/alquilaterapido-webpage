import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sideBar: {
        minWidth: "260px",
        zIndex: 500,
        marginRight: 40,
        transition: "all ease .5s",
        backgroundColor: "white",
        height: "calc(100vh - 80px)",
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    sideBarMax1024: {
        position: "fixed",
        left: "-100vw!important",
        width: "100vw!important",
        padding: "15px 20px",
        top: "80px",
        overflowY: "auto"
    },
    group: {
        marginBottom: "5px",
    },
    btnSearchFilter: {
        backgroundColor: "var(--primary)",
        color: "var(--colorPrimary)",
        fontWeight: 400,
        cursor: "pointer",
        textAlign: "center",
        padding: "8px",
    },
    ad: {
        width: "100%",
        cursor: "pointer",
        marginTop: "20px",
    },
    imgAdd: {
        width: "100%",
        objectFit: "contain",
    }
}));

export default useStyles;