import { TextareaPropsI } from "~/interfaces"
import useStyles from "~/components/styles/others/form/textarea.style"

const Textarea = ({ value, name }: TextareaPropsI) => {
    const classes = useStyles()

    return(
        <div className={classes.content}>
            <textarea className={classes.textArea} name={name} defaultValue={value}></textarea>
        </div>
    )
}

export default Textarea