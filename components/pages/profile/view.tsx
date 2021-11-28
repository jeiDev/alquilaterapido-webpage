import Moment from 'react-moment'
import Link from "next/link"
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import useStyles from "~/components/styles/profile/profile.style"
import { ProfileViewPropsI } from '~/interfaces/profile/profile.interface'

const stars = [1, 2, 3, 4, 5]

const ProfileView = ({account} : ProfileViewPropsI) => {
    const classes = useStyles()
    const [step, setStep] = useState("1")
    const [publications, setmePublications] = useState([])

    const handlerLogout = () => {

    }

    const handleChangeState = (_, value) => {
        setStep(value)
    }

    return (
        <>
            <div className={classes.top}>
                <div className={classes.containerTop}>
                    <div className={classes.containerPicture}>
                        <div className={classes.boxPicture}>
                            <img src="https://static1.abc.es/media/summum/2019/11/22/elon-musk-congreso-afp-kIVF--1200x630@abc.jpg" alt="" />
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.infoName}>
                            <h3>{account?.firstName} {account?.lastName}</h3>
                            <div className={classes.boxCheck}>
                                <FontAwesomeIcon className={classes.check} icon={faCheckCircle} />
                            </div>
                        </div>
                        <span className={classes.boxDate}>
                            (Cuenta creada <Moment fromNow locale="ES">{account?.createdAt}</Moment>)
                        </span>
                        <div className={classes.containerValorations}>
                            <span>Valoraciones</span>
                            <div className={classes.boxValorations}>
                                <span>7.2</span>
                                <div className={classes.boxStar}>
                                    {stars.map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} />))}
                                </div>
                            </div>
                        </div>
                        <Link href="/profile/edit">
                            <div className={classes.btnEdit}>
                                Editar
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className={classes.btnLogout} onClick={handlerLogout}>Cerrar Sesion</div>
                    </div>
                </div>
            </div>

            <div className={classes.bottom}>
                <TabContext value={step}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangeState} aria-label="lab API tabs example">
                            <Tab label={`Publicaciones (${publications.length})`} value="1" />
                            <Tab label={`Favoritos (0)`} value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        <div>
                            {/* <RowCardPublication
                        className="box-relevant"
                        row={4}
                        height={250}
                        active={true}
                        datas={this.state.mePublications}
                    /> */}
                        </div>
                    </TabPanel>

                    <TabPanel value="2">
                        Favoritos
                    </TabPanel>
                </TabContext>
            </div>
        </>
    )
}

export default ProfileView;