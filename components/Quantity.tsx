import React from "react"
import { useDispatch } from "react-redux"
import { changeQuantity } from "@/lib/features/cart"

// Quantity Button Component 

export const Quanitity: React.FC<{value:number,id:number}> = ({value,id})=>{
    const dispatch = useDispatch()
    return(
        <>
            <div className=" flex justify-stretch gap-x-5">
                <button onClick={()=>{
                    dispatch(changeQuantity({
                        id:id
                    }))
                }} className=" border w-7">
                    -
                </button>
                <div>
                    {value}
                </div>
                <button onClick={()=>{
                    dispatch(changeQuantity({
                        id:id,
                        operation:"add"
                    }))
                }} className=" border w-7">
                    +
                </button>
            </div>
        </>
    )
}