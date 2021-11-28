import CardPublication from './card-publication';
import classname from 'classnames';
import { useState } from 'react';

interface Props {
    height: Number
    active?: Boolean
    datas: any
    row: any
    title?: String
    className?: any
    messageEmpty?: Function | string
}

const RowCardPublication = (props: Props) => {
    const { height = 200, active = false, datas: _datas, title = "", className, messageEmpty: MessageEmpty } = props
    const [datas] = useState(_datas || []);

    return (
        <div className={classname("row", className)}>
            {title.length ?
                (<div
                    className={classname("box-title", active ? "active-box-title" : "")}
                    style={{ borderBottom: "1px solid gray", marginBottom: 15 }}
                >
                    <h2 className={classname(active ? "primary-color" : "")}>{title}</h2>
                </div>) : null
            }

            <div style={{ width: "100%" }}>
                {!datas.length && typeof MessageEmpty !== 'function' ? (
                    <p style={{
                        fontSize: '2em',
                        paddingTop: 70,
                        textAlign: 'center',
                        opacity: .5
                    }}>No tiene publicaciones</p>
                ) : null}

                {!datas.length && typeof MessageEmpty === 'function' ? (<MessageEmpty />) : null}
            </div>

            <div className="box-publicacion" style={{ 
                gridGap: '15px',
                display: "grid", 
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
            }}>
                {datas.map((data: any, i: any) => <CardPublication data={data} id={`${i + 1}`} key={i} height={height} />)}
            </div>
        </div>
    )
}

export default RowCardPublication;