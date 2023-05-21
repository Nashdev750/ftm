import { HomeIcon } from "@heroicons/react/24/outline"
import { Button } from "@material-tailwind/react"
import Link from "next/link"
import { useRouter } from "next/router"

const Sidebar = ({show})=>{
    const router = useRouter()
    return <div className={`w-full  h-full max-w-[250px] max-h-[90%] shadow-md bg-white rounded-md fixed border flex flex-col items-start md:ml-[-300px] ${show?'ml0':''} transition-all z-10`}>
        <div className="w-full flex justify-center items-center py-5 px-2">
            <Button onClick={e=>router.push('/new-challenge')} className="w-full">New Challenge</Button>
        </div>
        <div>
            <p className="text-blue-gray-400 p-3">Menu</p>
        </div>
        <div className="w-full border"></div>
        <div className="flex-1 w-full px-2">
            <Link href={'/client-area'} className="flex gap-2 w-full p-3 items-center hover:bg-blue-gray-50 rounded-md mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}     stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Home</span>
            </Link>
            <Link href={'/challenges'} className="flex gap-2 w-full p-3 items-center hover:bg-blue-gray-50 rounded-md my-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>

                <span>My Challenges</span>
            </Link>
            <Link href={'/profile'} className="flex gap-2 w-full p-3 items-center hover:bg-blue-gray-50 rounded-md my-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>

                <span>Profile</span>
            </Link>
            <Link href={'/support'} className="flex gap-2 w-full p-3 items-center hover:bg-blue-gray-50 rounded-md my-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span>Customer Support</span>
            </Link>
            <Link href={'/billing'} className="flex gap-2 w-full p-3 items-center hover:bg-blue-gray-50 rounded-md my-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>

                <span>Billing</span>
            </Link>
            <Link href={'/earning'} className="flex gap-2 w-full p-3 items-center hover:bg-blue-gray-50 rounded-md my-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Earnings</span>
            </Link>
            <div className="p-2 w-full">
              <Button onClick={e=>{window.localStorage.removeItem('token');window.location.reload()}} className="w-full bg-blue-gray-50 text-black">Logout</Button>
            </div>
        </div>
    </div>
}

export default Sidebar