import Challenges from "@/components/Challenges"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"


const Layout = ({children})=>{
    const [open, setOpen] = useState(false)
    return <div className="w-screen h-fit min-h-screen bg-blue-gray-50">
        <div className="w-3/4 h-full mx-auto flex justify-between items-stretch md:w-full">
            <div className="w-1/4 h-full py-7 flex relative md:w-0">
                <Sidebar show = {open}/>
            </div>
            <div className="w-3/4 flex flex-col justify-start items-start border p-4 md:w-full">
                <div className="w-full py-7 flex items-center justify-between">
                  <span>Trader</span>
                  <div className="w-[30px] cursor-pointer" role="button" onClick={e=>setOpen(!open)}>
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