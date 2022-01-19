import Image from "next/image"

function Footer() {
    return (
        <div className="flex  bg-gray-900 text-white">
            <div className=" lg:inline relative w-full hidden ">
                <Image src="/img/bg.png" layout="fill" objectFit="cover"
                className="rounded-lg"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 space-x-6 my-6">
            <div className="p-4 uppercase text-2xl font-thin">
                <p>Oh Yes we Bake Cakes and pudding as well
                    <span className="font-extrabold inline-block">
                    Checkout our restaurants nearby
                    <a href="bottom" name="bottom"></a>
                        </span></p>
            </div>
            <div className="p-6 space-y-3 text-gray-500">
                <h2 className="text-xl text-red-500">Find Our restaurants</h2>
            <p className="">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
            </div>
            <div className="p-4 space-y-4">
            <h1 className="text-2xl">WORKING HOURS</h1>
          <p className="">
            MONDAY - FRIDAY
            <span className="font-bold text-red-500">
                <br/>
            9:00 – 22:00
                </span> 
          </p>
          <p className="">
            SATURDAY - SUNDAY
            <span className="font-bold text-red-500">
                <br/>
            12:00 – 24:00
                </span> 
          </p>
            </div>
            </div>
        </div>
    )
}

export default Footer
