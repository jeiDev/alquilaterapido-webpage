import TextField from '@material-ui/core/TextField'
import ModernDatepicker from 'react-modern-datepicker'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { MultiInputPropsI } from '~/interfaces'
import useStyles from "~/components/styles/others/form/multi-input.style"

const MultiInput = (props: MultiInputPropsI) => {
    const classes = useStyles()

    return(
        <div className={classes.formGroup}>
            <MultiInput.select {...props} />
        </div>
    )
}

MultiInput.select = ({ type, value, setValue, title, name, defaultValue, disabled }: MultiInputPropsI) => {
    const classes = useStyles()

    if (type === 'number') {
        return (
            <PhoneInput
                country={'us'}
                value={`${value}`}
                onChange={setValue}
                inputProps={{
                    name,
                    required: true
                }}
            />
        )
    } else if (type === 'date') {
        return (
            <div className={classes.datePicker}>
                <label className={classes.labelDate}>{title}</label>
                <ModernDatepicker
                    date={value}
                    format={'DD-MM-YYYY'}
                    showBorder
                    onChange={setValue}
                    placeholder={'Cumpleaños'}
                />
            </div>
        )
    } else {
        return (
            <TextField
                label={title}
                name={name}
                defaultValue={defaultValue}
                variant="outlined"
                style={{ width: "100%" }}
                disabled={disabled || false}
            />
        )
    }
}

export default MultiInput