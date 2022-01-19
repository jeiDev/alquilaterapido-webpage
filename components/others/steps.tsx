import { useState } from "react";
import { CreatePublicationItemI, CreatePublicationPropsI } from "~/interfaces"
import classesname from "classnames"
import useStyles from "~/components/styles/others/steps.style"

const Steps = ({ items, title, onSubmit }: CreatePublicationPropsI) => {
    const classes = useStyles();
    const [active, setActive] = useState(0);

    Steps.global.setActive = setActive;
    Steps.global.onSubmit = onSubmit;

    return (
        <div className={classes.container}>
            <div className={classes.barContainer}>
                <div className={classes.barBox}>
                    {items.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => Steps.handlerChange(i, items)}
                            className={classesname(classes.circle, i <= active ? classes.circleActive : null)}
                        >{i + 1}</div>
                    ))}
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.box}>
                    <h3 className={classes.title}>{title}</h3>
                    <div className={classes.main}>
                        {items.map((item, i) => <div key={i} className={classes.mainContent} style={{display: i == active ? "flex" : "none"}}><item.render /></div> ) }
                    </div>
                    <div className={classes.boxButtons}>
                        {active > 0 ? (<div onClick={() => Steps.handlerChange(active - 1, items)} className={classesname(classes.button, classes.back)}>Atras</div>) : (<div></div>)}
                        <div onClick={() => Steps.handlerChange(active + 1, items)} className={classesname(classes.button, classes.next)}>Siguiente</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//GlobalState
Steps.global = {
    setActive: null,
    onSubmit: null
}

Steps.handlerChange = function (index: number, items: Array<CreatePublicationItemI>) {
    const select = items[index]
    const onChange = select?.onChange || (() => (true))
    const valid = onChange(index)

    if(!select && typeof Steps.global.onSubmit == "function") return Steps.global.onSubmit()
    if (!select || !valid) return;

    Steps.global.setActive(index)
}

export default Steps;