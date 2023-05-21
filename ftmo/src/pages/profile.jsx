import { postData } from "@/api"
import Layout from "@/components/Layout"
import Auth from "@/components/Auth"
import { Button, Input, Textarea } from "@material-tailwind/react"
import { useState } from "react"
import { toast } from "react-toastify"
import Footer2 from "@/components/Footer2"


const Profile = ()=>{
   const user = JSON.parse(window.localStorage.getItem('user'))
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')
   const [loading,setLoading] = useState(false)


    return <Layout>
           <div className="w-full">
           <div className="w-full bg-white shadow rounded border">
               <p className="text-blue-gray-600 font-semibold text-lg  p-4">Profile</p>
               <div className="w-full border"></div>
               <p className="text-blue-gray-600 font-normal text-sm  p-4">Note: If this information is not correct, contact for support.</p>
            </div>
           <div className="w-full bg-white shadow rounded mt-3 p-4 flex flex-col gap-3">
               <p className="text-gray-700 py-0">First Name: <span className="text-blue-500"> {user.fname}</span></p>
               <div className="border w-full"></div>
               <p className="text-gray-700 py-0">Last Name: <span className="text-blue-500"> {user.lname}</span></p>
               <div className="border w-full"></div>
               <p className="text-gray-700 py-0">Email: <span className="text-blue-500"> {user.email}</span></p>
               <div className="border w-full"></div>
               <p className="text-gray-700 py-0">Verified Trader: <span className="text-blue-500"> No</span></p>
            </div>
            </div>
            <Footer2/>
          </Layout>
}
export default Auth(Profile)