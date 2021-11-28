import { useContext } from "react";
import Slider from "~/components/others/slider";
import Context from "~/store/hook/context";

const PublicationViewSlider = () => {
    const {publication} = useContext(Context);
    const {publication: data} = publication;
    const {images} = data;
    
    return (
        <>
            <Slider
                images={images}
            />
        </>
    )
}

export default PublicationViewSlider