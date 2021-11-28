import { faHome, faBath, faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStyles from "~/components/styles/home/sidebar.style"
import Select from '~/components/others/form/select'
import classname from "classnames"

const SideBarHome = () => {
    const classes = useStyles()

    return (
        <div className={classname(classes.sideBar)}>
            <form>
                <div className={classes.group}>
                    <label><b>Que andas buscando?</b></label>
                </div>
                <div className={classes.group}>
                    <Select
                        placeholder="Casa / Apartamento / Local"
                        items={[
                            { title: "Casa", key: "home" },
                            { title: "Apartamento", key: "apartment" },
                            { title: "Local", key: "local" },
                        ]}
                        name="type"
                        icon={() => (<FontAwesomeIcon icon={faHome} />)}
                    />
                </div>

                <div className={classes.group}>
                    <Select 
                        placeholder="Baños"
                        items={[
                            {title: 1, key: 1}, 
                            {title: 2, key: 2},
                            {title: 3, key: 3},
                            {title: 4, key: 4}, 
                            {title: 5, key: 5},
                            {title: 6, key: 6},
                        ]}
                        name="bath"
                        icon={() => (<FontAwesomeIcon icon={faBath} />)}
                    />
                </div>

                <div className={classes.group}>
                <Select 
                        placeholder="Baños"
                        items={[
                            {title: 1, key: 1}, 
                            {title: 2, key: 2},
                            {title: 3, key: 3},
                            {title: 4, key: 4}, 
                            {title: 5, key: 5},
                            {title: 6, key: 6},
                        ]}
                        name="bath"
                        icon={() => (<FontAwesomeIcon icon={faBed} />)}
                    />
                </div>
                <div className={classes.group}>
                    <div className={classes.btnSearchFilter}>
                        <span>Buscar</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SideBarHome