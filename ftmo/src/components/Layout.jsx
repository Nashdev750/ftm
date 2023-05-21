import Challenges from "@/components/Challenges"
import Sidebar from "@/components/Sidebar"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"


const Layout = ({children})=>{
    const [open, setOpen] = useState(false)
    const router = useRouter()
    return <div className="w-screen h-fit min-h-screen bg-blue-gray-50">
    <div className="w-3/4 h-full mx-auto flex justify-between items-stretch md:w-full">
            <div className="w-1/4 h-full py-7 flex relative md:w-0">
                <Sidebar show = {open}/>
            </div>
            
            <div className="w-3/4 flex flex-col justify-start items-start border p-4 md:w-full">
                <div className="w-full py-7 flex items-center justify-between">
                <span className="flex justify-center items-center text-gray-600"><Link href='/client-area' className="underline flex items-center gap-2 justify-center text-gray-700">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}     stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                     </svg> <span>Home </span>
                     </Link> {router.route}
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
                <div className="w-full py-7">
                {children}
                </div>
            </div>
        </div>
        
    </div>
}

export default Layout