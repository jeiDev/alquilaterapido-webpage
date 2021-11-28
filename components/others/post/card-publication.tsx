import React from 'react';
import Link from 'next/link'
import { comas } from '~/helpers/code/number.helper'
import useStyles from "~/components/styles/post/card-publication.style"

interface Data {
    image: string
    slug: string
    livingPlace: any
    price: number
    title: string
    country: string
    address: string
}

interface Props {
    height: any
    id: any
    data: Data
}

const CardPublication = (props: Props) => {
    const classes = useStyles()
    const { height = 200, data } = props
    const { image } = data

    const dataFooter = [
        { icon: "/svg/icons/bathroom_dark.svg", value: data.livingPlace.bathrooms },
        { icon: "/svg/icons/bedroom_dark.svg", value: data.livingPlace.rooms },
        { icon: "/svg/icons/mt_dark.svg", value: "375 mt2" }
    ]

    return (
        <Link href={`/publication/${data.slug}`}>
            <a>
                <div style={{ height }} className={classes.contentCardPublication}>
                    <div className={classes.contentImage}>
                        <div className={classes.boxImage}>
                            <img className={classes.image} src={image} />
                        </div>
                        <div className={classes.boxPrice}>
                            <span className={classes.price}>RD$ {comas(data.price)}</span>
                        </div>
                    </div>
                    <div className={classes.contentInfo}>
                        <div className={classes.title}>
                            <span>{data.title}</span>
                        </div>
                        <div className={classes.address}>
                            <span>{data.country} - {data.address}</span>
                        </div>
                        <div className={classes.boxIcons}>
                            {dataFooter.map((data, i) => (
                                <div key={i} className={classes.icon}>
                                    <img src={data.icon} className={classes.imgIcon} /> {data.value}
                                    {(i + 1) < dataFooter.length && (<span className={classes.bar}>/</span>)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default CardPublication;