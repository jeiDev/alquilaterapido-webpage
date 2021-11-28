import classnames from 'classnames'

import useStyles from "~/components/styles/publication/view/information.style"

const PublicationViewInformation = () => {
    const classes = useStyles()
    const infos = [
        { title: "Número de Habitaciones", value: 5 },
        { title: "Número de Baños", value: 4 },
        { title: "Construcción (m²)", value: 165 },
        { title: "Tipo", value: "Sin Amueblar" }
    ]

    return (
        <>
            <h3>Informacion</h3>
            <div className={classes.contentInformations}>
                {(infos || []).map((info: any, i: any) => {

                    return (
                        <div className={classnames("row", classes.borderInfo)} key={i}>
                            <div className={classnames("col-6", classes.title)}>{info.title}</div>
                            <div className="col-6">{info.value || {}}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PublicationViewInformation