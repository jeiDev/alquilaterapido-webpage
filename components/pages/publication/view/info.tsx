import Moment from 'react-moment'
import useStyles from "~/components/styles/publication/view/info.style"
import { comas } from "~/helpers/code/number.helper"

const PublicationViewInfo = () => {
    const classes = useStyles()
    const date = "Tue Aug 10 2021 14:07:11"

    return (
        <div className={classes.publicationInfo}>
            <h2 className={classes.priceInfo}>RD$ {comas(1000)}</h2>
            <h3 className={classes.titleInfo}>Title</h3>
            <span className={classes.addressInfo}>Address</span>
            <span className={classes.dateInfo}>Publicado <Moment fromNow locale="ES">{new Date(date)}</Moment></span>
        </div>
    )
}

export default PublicationViewInfo