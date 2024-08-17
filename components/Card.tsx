
'use client';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useSelector, useDispatch } from "react-redux"
import { addCart } from "@/lib/features/cart"
import { RootState } from "@/lib/store";
import { CardData } from "@/lib/types";
import Link from "next/link"

// Card Component

export const CardComponent: React.FC<CardData> = (data: CardData) => {
  const state = useSelector((state: RootState) => state.cart.data)
  const dispatch = useDispatch()
  return (
    <Card className="w-full max-w-xs rounded-xl border">
      <div className="grid gap-4 p-4">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
          <img
            src={data.image}
            alt="Product image"
            width="400"
            height="500"
            className="aspect-[4/5] object-cover border w-full"
          />
        </div>
        <div className="grid gap-1.5">
          <h3 className="font-semibold text-sm md:text-base">{data.productName}</h3>
          <p className="font-semibold text-sm md:text-base">${data.price}</p>
          <p className="text-xs md:text-base text-black">{data.description}</p>
        </div>
        {
          state.find((val) => val.id == data.productId) ?  //if product is already added into the cart then show them go to cart option
            <>
              <Link href={"/cart"}>
                <Button className=" w-full" size="sm">Go To Cart</Button>
              </Link>
            </> :
            <>
              <Button size="sm" onClick={() => {
                dispatch(addCart({
                  id: data.productId,
                  productName : data.productName,
                  quantity: 1,
                  price: data.price,
                  image : data.image,
                  description:data.description,
                  companyName: data.companyName
                }))
              }}>Add to cart</Button>
            </>
        }
      </div>
    </Card>
  )
}