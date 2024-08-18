'use client'
import { Quanitity } from "@/components/Quantity"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"

export default function CartPage() {
    const data = useSelector((state: RootState) => state.cart.data)
    return (
        <>
            {
                data.length > 0 ?  // conditional rendering if cart has no item then render Cart Empty
                <div className="container mx-auto p-4">
                    <h1 className="text-center font-bold text-2xl md:text-3xl p-5 md:p-10">Your Cart ({data.reduce((sum, item) => sum + item.quantity, 0)} Items)</h1>
                    <div className="overflow-x-auto">
                        <table cellPadding={16} className="w-full md:w-3/4 mx-auto text-left">
                            <thead>
                                <tr className="border-b-2">
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
                                            <tr key={i} className="text-center border-b">
                                                <td>
                                                    <div className="flex flex-col md:flex-row justify-center items-center gap-x-5">
                                                        <div>
                                                            <img src={val.image} className="w-20 md:w-24" alt="Product Image" />
                                                        </div>
                                                        <div className="text-left">
                                                            <div className="text-xs md:text-sm">{val.companyName}</div>
                                                            <div className="text-base md:text-xl font-bold w-20 md:w-32">{val.productName}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-sm md:text-base">${val.price}</td>
                                                <td className="text-sm md:text-base">
                                                    <Quanitity value={val.quantity} id={val.id} />
                                                </td>
                                                <td className="text-sm md:text-base">${val.quantity * val.price}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="border-t-2 border-gray-500 w-full md:w-1/3 text-right mt-7 p-2 pt-5 mx-auto">
                        <div className="font-bold text-lg md:text-xl">
                            ${data.reduce((sum, item) => sum + item.quantity * item.price, 0)}
                        </div>
                    </div>
                </div>
                :
                <div className="flex items-center justify-center h-[80vh]">
                    <img src={"empty-cart.png"} alt="empty cart image" className="w-1/2 md:w-1/3" />
                </div>
            }
        </>
    )
}
