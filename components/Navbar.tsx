'use client'
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store";


// NavBar Component 
export default function Navbar() {
    const data = useSelector((state: RootState) => state.cart.data)
    return (
        <nav className=" fixed w-full top-0 p-5 flex justify-between bg-slate-100 h-16 items-center border-b-4">
            <div className="flex gap-3">
                <Link href={"/"}>
                    <div>
                        <img src={"/assets/images.png"} width={40} alt="Test" />
                    </div>
                </Link>
            </div>
            <div>
                <div className=" relative">
                    <div className=" bg-slate-800 rounded-xl w-6 h-6 text-center text-white absolute bottom-5 left-2/4 text-xs p-1">{data.length}</div>
                    <Link href={"/cart"}>
                        <FaCartPlus size={30} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}