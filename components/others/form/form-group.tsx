import { FromGroupPropsI } from "~/interfaces"
import useStyles from "~/components/styles/others/form/form-group.style"
import classname from "classnames"

const FormGroup = ({title, children, className}: FromGroupPropsI) => {
    const classes = useStyles()

    return(
        <div className={classname(classes.group, className)}>
            <label htmlFor="title" className={classes.label}>{title}</label>
            {children}
        </div>
    )
}

export default FormGroup