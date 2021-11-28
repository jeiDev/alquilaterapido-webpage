import useStyles from "~/components/styles/publication/view/send-message.style"

const PublicationViewSendMessage = () => {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.containerChat}>
                <div className={classes.infoChat}>
                    <span>Enviar mensaje a publicante</span>
                </div>
                <div>
                    <textarea placeholder="Escribe tu mensaje..." className={classes.messageWrite} ></textarea>
                </div>
                <div className={classes.boxButton}>
                    <div className={classes.btnSend}>Enviar</div>
                </div>
            </div>

            <div className={classes.boxWhatsapp}>
                <span>Escribir por whatsapp</span>
            </div>
        </div>
    )
}

export default PublicationViewSendMessage