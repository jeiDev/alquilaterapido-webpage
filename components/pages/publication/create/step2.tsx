import { useContext } from "react";
import FormGroup from "~/components/others/form/form-group";
import Select from "~/components/others/form/select";
import Context from "~/store/hook/context";

const Step2 = () => {
    const {publication} = useContext(Context);
    const {type, bath, bedroom} = publication.dataCreate;
    
    return (
        <div>

            <FormGroup title="Que vas a publicar">
                <Select 
                    defaultIndex={type}
                    placeholder="Casa / Apartamento / Local"
                    items={[
                        {title: "Casa", key: "home"}, 
                        {title: "Apartamento", key: "apartment"},
                        {title: "Local", key: "local"},
                    ]}
                    name="type"
                    icon={() => (<img src="/svg/icons/home_dark.svg" alt="home"/>)}
                />
            </FormGroup>

            <FormGroup title="Cuantos baños tiene?">
                <Select 
                    defaultIndex={bath}
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
                    icon={() => (<img src="/svg/icons/bathroom_dark.svg" alt="bathroom"/>)}
                />
            </FormGroup>

            <FormGroup title="Cuantas habitaciones tiene?">
                <Select 
                    defaultIndex={bedroom}
                    placeholder="Habitaciones"
                    items={[
                        {title: 1, key: 1}, 
                        {title: 2, key: 2},
                        {title: 3, key: 3},
                        {title: 4, key: 4}, 
                        {title: 5, key: 5},
                        {title: 6, key: 6},
                    ]}
                    name="bedroom"
                    icon={() => (<img src="/svg/icons/bedroom_dark.svg" alt="bedroom"/>)}
                />
            </FormGroup>
        </div>
    )
}

export default Step2