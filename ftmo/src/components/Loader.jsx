import Image from "next/image"
import loader2 from "../images/loader2.gif"
const Loader = ()=>{
    return (
        <div className="flex justify-center items-center fixed w-screen h-screen bg-transparent">
           <Image src={loader2} alt="" className="w-[200px] " />
        </div>
    )
}

export default Loader