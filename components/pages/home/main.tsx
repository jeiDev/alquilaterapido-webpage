import Search from '~/components/others/search'
import RowCardPublication from "~/components/others/post/row-card-publication"
import { useContext, useEffect, useState } from 'react'
import Context from '~/store/hook/context'
import publicationProvider from '~/providers/publication.provider'

const MainHome = () => {
    const [limit, setLimit] = useState(10);
    const [skip, setSkip] = useState(0);
    const {publication} = useContext(Context);
    const {publications, setPublications} = publication;
    const dataPublications = (publications || []).map(publication => {
        return ({
            image: publication.images[0],
            slug: publication.uuid,
            livingPlace: {
                bathrooms: 4,
                rooms: 2
            },
            price: publication.price,
            title: publication.title,
            country: "Santo Domingo",
            address: "Los Jardines del Norte",
        })
    });

    useEffect(() => {
        if(publications != null) return;

        publicationProvider.getAll(limit, skip).then(res => {
            const _publications = res.data || [];
            setPublications(_publications);
        })
    }, []);

    if(!publications) return null;

    return (
        <div style={{flex: "1 1 auto"}}>
            <div className="mb-3" style={{display: "flex", justifyContent: "flex-end"}}>
                <Search />
            </div>
            <div>
                <RowCardPublication
                    title="Publicaciones"
                    row={3}
                    height={250}
                    datas={dataPublications}
                />
            </div>
        </div>
    )
}

export default MainHome