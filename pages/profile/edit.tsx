import { useRef, useState } from "react"
import { CameraAlt } from '@material-ui/icons'
import Layout from "~/components/layouts"
import classname from "classnames"
import TextField from '@material-ui/core/TextField'
import ModernDatepicker from 'react-modern-datepicker'
import PhoneInput from 'react-phone-input-2'
import useStyles from "~/components/styles/profile/edit.style"
import MultiInput from "~/components/others/form/multi-input"
import AuthorizationMiddleware from "~/middlewares/authorization.middleware"

const cols = ["xs", "sm", "md", "lg"]

const EditProfile = () => {
    const [cameraActive, setCameraActive] = useState(true);
    const [birthday, setBirthday] = useState(new Date())
    const inputProfile = useRef(null);
    const classes = useStyles();
    // "col-xs-6 col-sm-6 col-md-6 col-lg-6"
    const fields = [
        {
            title: "Nombre",
            name: 'firstName',
            defaultValue: "Jei",
            grid: [6, 6, 6, 6]
        },
        {
            title: "Apellido",
            name: 'lastName',
            defaultValue: "Devp",
            grid: [6, 6, 6, 6]
        },
        {
            title: "Correo",
            defaultValue: "jei@dev.com",
            grid: [12, 12, 12, 12],
            disabled: true
        },
        {
            name: "phone",
            value: "18294785698",
            grid: [6, 6, 6, 6],
            className: "box-phone",
            type: "number"
        },
        {
            title: "Cumpleaños",
            name: "birthday",
            value: birthday,
            grid: [6, 6, 6, 6],
            className: "box-birthday",
            type: "date",
            setValue: setBirthday
        },
        {
            title: "Direccion",
            name: "address",
            value: "Julia 13",
            grid: [12, 12, 12, 12]
        }
    ]

    const handleSubmit = () => {

    }

    return (
        <AuthorizationMiddleware>
            <Layout title="Profile Edit">
                <form noValidate autoComplete="off" onSubmit={handleSubmit} className={classes.form}>
                    <div className="row">
                        <div className="col-3">
                            <div className={classes.boxImgProfile}
                                onMouseEnter={() => setCameraActive(true)}
                                onMouseOut={() => setCameraActive(false)}
                            >
                                <img src="https://static1.abc.es/media/summum/2019/11/22/elon-musk-congreso-afp-kIVF--1200x630@abc.jpg" className={classes.img}/>
                                <input type="file" name="profile" ref={inputProfile} />
                                <div className={classname(classes.boxIcon, cameraActive ? classes.activeIcon : "")}
                                    onClick={() => inputProfile?.current.click()}
                                >
                                    <CameraAlt className={classes.icon} />
                                </div>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="row" style={{ width: "100%" }}>
                                {fields.map((field, i: any) => (
                                    <div key={i} className={classname(field.grid.map((g, i) => `col-${cols[i]}-${g}`).join(" "), "pb-4")}>
                                        <MultiInput
                                            type={field.type || ""}
                                            defaultValue={field.defaultValue}
                                            disabled={field.disabled}
                                            name={field.name || ""}
                                            setValue={field.setValue}
                                            title={field.title || ""}
                                            value={field.value}
                                        />
                                    </div>
                                ))}

                                <div className={classes.boxButton}>
                                    <input type="submit" className={classes.btn} value="Guardar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </AuthorizationMiddleware>
    )
}

export default EditProfile