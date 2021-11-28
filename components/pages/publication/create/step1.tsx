import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Input from "~/components/others/form/input"
import FormGroup from "~/components/others/form/form-group"
import { useContext } from 'react'
import Context from '~/store/hook/context'

const Step1 = () => {
    const {publication} = useContext(Context);
    const {title, country, address} = publication.dataCreate;
    
    return (
        <div>
            <FormGroup title="Titulo de la publicacion">
                <Input name="title" value={title}/>
            </FormGroup>

            <FormGroup title="Pais">
                <Input
                    name="country" value={country}
                    iconRight={() => (<FontAwesomeIcon icon={faMapMarkerAlt} />)}
                />
            </FormGroup>

            <FormGroup title="Direccion">
                <Input
                    name="address" value={address}
                    iconLeft={() => (<img src="/svg/icons/marker_home.svg" alt="marker home" />)}
                />
            </FormGroup>
        </div>
    )
}

export default Step1