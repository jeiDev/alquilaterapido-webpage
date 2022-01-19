import { useEffect, useState} from 'react';
import classnames from 'classnames';
import useStyles from "~/components/styles/others/slider.style";
import { SliderPropsI } from '~/interfaces';

const Slider = ({ images }: SliderPropsI) => {
    const classes = useStyles();
    const [src, setSrc] = useState(null);

    useEffect(() => {
        setSrc(images[0])
    }, [src])
    
    return (
        <div className={classes.containerSlides}>
            <div className={classnames(classes.boxShowImage)}>
                {src && (<img src={`${src}?time=${new Date().getTime()}`} />)}
            </div>
        
            <div className={classes.boxCarousel}>
                {images.map((image, i) => {
                    return (
                        <div className={classes.contentCarousel} key={i} onClick={() => setSrc(image)}>
                            <img src={image} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Slider;