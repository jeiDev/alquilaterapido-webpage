import { FormGroupAuthPropsI } from "~/interfaces"
import useStyles from "~/components/styles/auth/formGroup.style"

const FormGroupAuth = ({title, Icon, input, message = {}}: FormGroupAuthPropsI) => {
    const classes = useStyles()

    return (
        <div className={classes.formGroup}>
            <label className={classes.label}>{title}</label>
            <div className={classes.boxInput}>
                <div className={classes.boxIconInput}>
                    <Icon className={classes.icon}/>
                </div>
                <input type={input.type} className={classes.input} name={input.name} placeholder={input.placeholder} />
            </div>
            <small className={`form-text text-${message.type}`}>{message.text}</small>
        </div>
    )
}

export default FormGroupAuth;