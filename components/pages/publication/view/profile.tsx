import Moment from 'react-moment'
import Link from "next/link"
import useStyles from "~/components/styles/publication/view/profile.style"

const PublicationViewProfile = () => {
    const classes = useStyles()
    const date = "Tue Aug 10 2021 14:07:11"

    return (
        <div className={classes.profileInfo}>
            <div className={classes.boxPictureProfile}>
                <div className={classes.boxPicture}>
                    <Link href={`/profile/${1}`}>
                        <img src="https://static1.abc.es/media/summum/2019/11/22/elon-musk-congreso-afp-kIVF--1200x630@abc.jpg" />
                    </Link>
                </div>
            </div>
            <div>
                <h2 className={classes.fullname}>
                    <Link href={`/profile/${1}`}>
                        Juanito Perez
                    </Link>
                </h2>
                <span className={classes.dateProfile}>(Cuenta creada <Moment fromNow locale="ES" >{new Date(date)}</Moment>)</span>
            </div>
        </div>
    )
}

export default PublicationViewProfile