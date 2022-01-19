import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

function Header() {


    const quantity = useSelector(state => state.cart.quantity)
    

    return (
        <div className="grid grid-cols-3 p-4  bg-[#d1411e] sticky top-0 h-[100px] z-50">
            <Link href="/">
            <div className="flex space-x-3 items-center cursor-pointer">
                <div className="relative h-[50px] w-[50px] bg-white rounded-full p-[20px]">
                <Image src="/img/telephone.png" className="p-4" objectFit="contain" layout="fill"/>
                </div>
                 <div className="text-white">
                <p className="text-xs  font-semibold">ORDER NOW!!</p>
                <p className="text-md font-bold">+1 (123) 456-7890</p>
                </div>
            </div>
            </Link>

            <div className=" space-x-7 px-2 py-1 items-center text-white hidden lg:flex">
                <Link href="/">
                <a href="#" className="link">Homepage</a>
                </Link>
                <a href="#products" className="link">Products</a>
                <a href="#" className="link">Menu</a>
                <a href="#" className="link">Events</a>
                <a href="#" className="link">Blog</a>
                <a href="#bottom" className="link">Contact</a>
            </div>
            <div className=" h-20 w-20 lg:hidden p-5">
                <Image src="/img/logo.png"  
                layout="fill" className="ml-2" objectFit="contain"/>
            </div>

                <Link href="/cart">
            <div className="flex justify-end items-center relative mr-7">
                <Image src="/img/cart.png" width={34} height={34} className="cursor-pointer"/>
                
                
                <span className="absolute top-[8px] right-[-8px] text-xs p-1 rounded-full bg-white w-5 h-5 flex items-center justify-center font-bold text-[#d1411e]">{quantity}</span>
                
            </div>
                </Link>
                


        </div>
    )
}

export default Header
