'use client'
import { Quanitity } from "@/components/Quantity"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/lib/store"

export default function CartPage() {
    const data = useSelector((state: RootState) => state.cart.data)
    return (
        <>
            {
                data.length > 0 ?  // conditional rendering if cart has no item then render Cart Empty
                <div className=" flex flex-col items-center justify-stretch "> 
                    <h1 className=" text-center font-bold text-3xl p-10">Your Cart({data.reduce((sum, item) => sum + item.quantity, 0)} Items)</h1>
                    <table cellPadding={32} className="">
                        <thead>
                            <tr className="">
                                <th>Items</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((val, i) => {
                                    return (
                                        <tr key={i} className=" text-center">
                                            <td>
                                                <div className=" flex justify-center items-center gap-x-5">
                                                    <div>
                                                        <img src={val.image} width={70} alt="Temp" />
                                                    </div>
                                                    <div className=" text-left">
                                                        <div className=" text-sm">{val.companyName}</div>
                                                        <div className=" text-xl font-bold text-wrap w-20">{val.productName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>$10</td>
                                            <td className="">
                                                <Quanitity value={val.quantity} id={val.id} />
                                            </td>
                                            <td>${val.quantity * val.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="border-t-2 border-gray-500 w-1/3 text-right mt-7 p-2 pt-5">
                        <div className=" font-bold text-xl">
                            ${data.reduce((sum, item) => sum + item.quantity * item.price, 0)}
                        </div>

                    </div>
                </div>
                    :
                    <div className=" flex items-center justify-center h-[80vh]">
                        <img src={"empty-cart.png"} alt="empty cart image" />
                    </div>
            }
        </>
    )
}