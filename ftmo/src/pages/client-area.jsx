import { getData } from "@/api"
import Challenges from "@/components/Challenges"
import Sidebar from "@/components/Sidebar"
import auth from "@/components/Auth"
import { Button } from "@material-tailwind/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Footer2 from "@/components/Footer2"
import Link from "next/link"


const ClientArea = ()=>{
    const [orders, setOrders] = useState([])
    useEffect(()=>{
       getData('orders/all/open')
       .then(res=>{
           setOrders(res.data)
       })
    },[])

    const router = useRouter()
    const [open, setOpen] = useState(false)
    return <div className="w-screen h-fit min-h-screen bg-blue-gray-50">
        <div className="w-3/4 h-full mx-auto flex justify-between items-stretch md:w-full">
            <div className="w-1/4 h-full py-7 flex relative md:w-0">
                <Sidebar show={open}/>
            </div>
            <div className="w-3/4 flex flex-col justify-start items-start border p-4 md:w-full">
            <div className="w-full py-7 flex items-center justify-between">
                <span className="flex justify-center items-center text-gray-600"><Link href='/client-area' className="underline flex items-center gap-2 justify-center text-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}     stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                     </svg> <span>Home/</span>
                     </Link>
                </span>
                  <div className="w-[30px] cursor-pointer hidden md:block" role="button" onClick={e=>setOpen(!open)}>
                  {open
                       ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                       </svg>
                       :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                       </svg>
                        }
                  </div>
                </div>
                {orders?.length >0 &&
                    <div className="w-full pb-5">
                        <div className="w-full bg-white shadow rounded p-5 flex flex-col justify-end items-end">
                        <p className="w-full text-blue-gray-800">Your challenge is almost ready, complete the next few steps.</p>
                        <Button className="w-[100px]" onClick={e=>router.push('/billing')}>Billing</Button>
                        </div>
                    </div>
                }

                <div className="w-full py-7 pt-0">

                <Challenges/>
                </div>
                <Footer2/>
            </div>
        </div>
        
    </div>
}

export default auth(ClientArea)