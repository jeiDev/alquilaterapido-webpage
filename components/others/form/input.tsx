import { InputPropsI } from "~/interfaces"
import useStyles from "~/components/styles/others/form/input.style"
import classNames from "classnames"

const Input = ({ value, name, iconRight, iconLeft, onChange}: InputPropsI) => {
    const classes = useStyles()

    return(
        <div className={classes.contentInput}>
            {typeof iconLeft === "function" && (<div className={classNames(classes.icon)}> {iconLeft()} </div>)} 
            <input type="text" name={name} className={classes.input} defaultValue={value} onChange={(e) => {
                if(typeof onChange == "function"){
                    onChange(e.target.value)
                }
            }}/>
            {typeof iconRight === "function" && (<div className={classNames(classes.icon, classes.iconRight)}> {iconRight()} </div>)} 
        </div>
    )
}

export default Input