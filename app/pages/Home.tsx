import {CardComponent} from "@/components/Card"
import data from "@/json/products.json"

export default function HomePage(){
    return(
        <div className=" flex justify-center">
            <div className="grid md:m-10 md:grid-cols-4 md:gap-y-11 md:w-full sm:grid-cols-2 grid-cols-1">
                {
                    data.data.map((val,i)=>{
                        return(
                            <CardComponent key={i} companyName={val.companyName} productName={val.productName} productId={val.productId} price={val.price} description={val.description} image={val.image}/>
                        )
                    })
                }
            </div>
        </div>
    )
}