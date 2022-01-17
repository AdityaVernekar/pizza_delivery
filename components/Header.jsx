import Image from "next/image"

function Header() {
    return (
        <div className="grid grid-cols-3 p-4  bg-[#d1411e] sticky top-0 h-[100px] z-50">
            <div className="flex space-x-3 items-center">
                <div className="relative h-[50px] w-[50px] bg-white rounded-full p-[20px]">
                <Image src="/img/telephone.png" className="p-4" objectFit="contain" layout="fill"/>
                </div>
                 <div className="text-white">
                <p className="text-xs  font-semibold">ORDER NOW!!</p>
                <p className="text-md font-bold">+1 (123) 456-7890</p>
                </div>
            </div>

            <div className=" space-x-7 px-2 py-1 items-center text-white hidden lg:flex">
                <p className="link">Homepage</p>
                <p className="link">Products</p>
                <p className="link">Menu</p>
               

                <p className="link">Events</p>
                <p className="link">Blog</p>
                <p className="link">Contact</p>
            </div>
            <div className=" h-20 w-20 lg:hidden p-5">
                <Image src="/img/logo.png"  
                layout="fill" className="ml-2" objectFit="contain"/>
            </div>

            <div className="flex justify-end items-center relative mr-7">
                <Image src="/img/cart.png" width={34} height={34} className=""/>
                
                <span className="absolute top-[0px] right-[-8px] text-xs p-1 rounded-full bg-white w-5 h-5 flex items-center justify-center font-bold text-[#d1411e]">2</span>
                
            </div>
                


        </div>
    )
}

export default Header
