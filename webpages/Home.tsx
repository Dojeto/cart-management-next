import {CardComponent} from "@/components/Card"
import data from "@/json/products.json"

export default function HomePage(){
    return(
        <div className=" m-10 grid grid-cols-4 gap-y-11">
            {
                data.data.map((val,i)=>{
                    return(
                        <CardComponent key={i} companyName={val.companyName} productName={val.productName} productId={val.productId} price={val.price} description={val.description} image={val.image}/>
                    )
                })
            }
        </div>
    )
}