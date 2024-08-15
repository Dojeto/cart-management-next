//types definations for passing props
export type CardData = {
    productId : number,
    productName : string,
    price : number,
    image : string,
    description:string,
    companyName:string
}

export type CardProp = {
    data : Array<CardData>
}
