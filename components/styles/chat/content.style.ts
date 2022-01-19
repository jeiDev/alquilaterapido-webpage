import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    clearfix: {
        "&:after": {
            visibility: "hidden",
            display: "block",
            fontSize: 0,
            content: " ",
            clear: "both",
            height: 0
        }
    },
    card: {
        background: "#fff",
        transition: ".5s",
        border: 0,
        marginBottom: 30,
        borderRadius: ".55rem",
        position: "relative",
        width: "100%",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
    },
    chatApp: {
        "& .people-list": {
            width: "280px",
            position: "absolute",
            left: "0",
            top: "0",
            padding: "20px",
            zIndex: 7,
        },
        "& .chat": {
            marginLeft: 280,
            borderLeft: "1px solid #eaeaea"
        }
    },
    peopleList: {
        transition: ".5s",
        "& .chat-list li": {
            padding: "10px 15px",
            listStyle: "none",
            borderRadius: 3
        },
        "& .chat-list li:hover": {
            background: "#efefef",
            cursor: "pointer"
        },
        "& .chat-list li.active": {
            background: "#efefef"
        },
        "& .chat-list li .name": {
            fontSize: 15
        },
        "& .chat-list img": {
            width: 45,
            borderRadius: "50%"
        },
        "& img": {
            float: "left",
            borderRadius: "50%"
        },
        "& .about": {
            float: "left",
            paddingLeft: 8
        },
        "& .status": {
            color: "#999",
            fontSize: 13
        }
    }
}));

export default useStyles;