import { useState } from "react"

const useStatePublication = () => {
    const [publications, setPublications] = useState(null);
    const [publication, setPublication] = useState(null);
    const [dataCreate, setDataCreate] = useState({
        title: "",
        country: "",
        address: "",
        type: null,
        bath: 0,
        bedroom: 0,
        price: 0,
        currencyPrice: "DOP",
        description: ""
    });


    return {
        dataCreate, setDataCreate,
        publications, setPublications,
        publication, setPublication
    }
}

export default useStatePublication;