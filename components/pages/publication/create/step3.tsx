import { useContext } from "react";
import FormGroup from "~/components/others/form/form-group";
import Input from "~/components/others/form/input";
import Textarea from "~/components/others/form/textarea";
import useStyles from "~/components/styles/others/steps.style";
import Context from "~/store/hook/context";

const Step3 = () => {
    const classes = useStyles();
    const {publication} = useContext(Context);
    const {price, description} = publication.dataCreate;
    
    return (
        <>
            <FormGroup title="Precio">
                <input type="hidden" name="currencyPrice" value="DOP"/>
                <Input name="price" value={price}/>
            </FormGroup>

            <FormGroup title="Descripcion" className={classes.formGroup}>
                <Textarea name="description" value={description}/> 
            </FormGroup>
        </>
    )
}

export default Step3