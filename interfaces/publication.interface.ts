
export interface CallbackFBNI {
   (index: number): boolean 
}

export interface CreatePublicationItemI {
    title?: string
    onChange?: CallbackFBNI 
    render: Function
}

export interface CreatePublicationPropsI {
    title?: string
    onSubmit: Function
    items: Array<CreatePublicationItemI>
}

export interface DataCreateI {
    title: string
    country: string
    address: string
    type: number
    bath: number
    bedroom: number
    price: number
    currencyPrice: string
    description: string
}