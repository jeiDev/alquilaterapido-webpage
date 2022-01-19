import classnames from "classnames"
import useStyles from "~/components/styles/publication/view/description.style"
import { splitLinearJumps } from "~/helpers/code/string.helper"

const PublicationViewDescription = () => {
    const classes = useStyles()
    const descriptions = splitLinearJumps(`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore illo, 
        sint quae possimus praesentium assumenda rem sequi, 
        doloribus illum et sunt laboriosam corporis perspiciatis facere 
        consequatur aspernatur ad nisi magnam.
    `) || []

    return (
        <div className={classnames("row", classes.containerDescription)}>
            <div className="col-12">
                <h3>Descripción</h3>
                <div className={classes.boxDescription}>
                    {descriptions.map((description, i) => (
                     descriptions.length > 1 ?
                        (<div className={classnames(classes.text, classes.separationText)} key={i}>{description}</div>) :
                        (<p className={classes.text} key={i}>{description}</p>)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PublicationViewDescription