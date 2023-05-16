import { postData } from "@/api"
import Layout from "@/components/Layout"
import auth from "@/components/Auth"
import { Button, Input, Textarea } from "@material-tailwind/react"
import { useState } from "react"
import { toast } from "react-toastify"


const Support = ()=>{
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')
   const [loading,setLoading] = useState(false)

    const send = ()=>{
        setLoading(true)
        postData('support',{subject,message})
        .then(res=>{
            setSubject('')
            setMessage('')
            setLoading(false)
           toast.success('Ticket opened, Support team will email you regarding your query.')
        })
        .catch(err=>{
            setLoading(false)
            toast.error('Unable to open ticket please try again')
        })
    }

    return <Layout>
           <div className="w-full">
           <div className="w-full bg-white shadow rounded border">
               <p className="text-blue-gray-600 font-semibold text-lg  p-4">Open Ticket</p>
               <div className="w-full border"></div>
               <p className="text-blue-gray-600 font-normal text-sm  p-4">Note: If this ticket is related to an order, please include order number.</p>
            </div>
           <div className="w-full bg-white shadow rounded mt-3 p-4 flex flex-col gap-3">
               <Input type="text" value={subject} onChange={e=>setSubject(e.target.value)} label="Subject" className="mb-3"/>
               <Textarea label="Message" value={message} onChange={e=>setMessage(e.target.value)}></Textarea>
               <Button onClick={send} disabled = {(!message || !subject)||(message?.trim()=='' || subject?.trim()=='') || loading}
                
               >{loading?'Sending...':'Send'}</Button>
            </div>
            </div>

          </Layout>
}
export default auth(Support)