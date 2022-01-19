import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { SelectItemI, SelectPropsI } from "~/interfaces"
import useStyles from "~/components/styles/others/form/select.style"
import classNames from "classnames"
import { clickOutSide } from "~/helpers/window/utils.helper"

const Select = ({ items, name, icon, placeholder, defaultIndex }: SelectPropsI) => {
    let into = false;
    const classes = useStyles()
    const container = useRef()
    const [index, setIndex] = useState(defaultIndex)
    const select = items.find((_, i: number) => i == index)
    const [text, setText] = useState(select?.title)
    const [key, setKey] = useState(select?.key)
    const [active, setActive] = useState(false)
    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {   
        if(into) return 
        into = true;
        clickOutSide(container.current, (result) => {
            if(!result) return;
            setShowScroll(false)
            setActive(false)
        })
    }, []);

    const onTransitionEnd = () => {
        setShowScroll(true)
    }

    const handlerClick = () => {
        setShowScroll(false)
        setActive(!active)
    }

    const handlerChange = (item: SelectItemI, index: number) => {
        setIndex(index);
        setKey(item.key);
        setText(item.title);
        handlerClick();
    }

    return (
        <div className={classes.container}  ref={container}>
            <div className={classes.box} onClick={handlerClick}>
                {typeof icon === "function" && (<div className={classNames(classes.icon, classes.iconLeft)}>{icon()}</div>)}
                <input type="hidden" name={name} value={key} />
                <input type="text" className={classes.input} value={text} placeholder={placeholder} disabled />
                <div className={classNames(classes.icon, classes.iconRight)}><FontAwesomeIcon icon={faAngleDown} /></div>
            </div>
            <div
                className={classNames(classes.containerItems, active ? classes.containerItemsActive : null)}
                style={{ height: `${items.length * 40}px` }}
                onTransitionEnd={onTransitionEnd}
            >
                <ul className={classes.boxItems} style={{ overflowY: showScroll ? "auto" : "hidden" }}>
                    {items.map((item, i) => <li key={i} onClick={() => handlerChange(item, i)} className={classes.item}>{item.title}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Select