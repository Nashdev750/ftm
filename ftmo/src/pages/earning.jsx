import Layout from "@/components/Layout"
import Auth from "@/components/Auth"

const Earnings = ()=>{

    return <Layout>
           <div className="w-full">
           <div className="w-full shadow rounded bg-red-100">
               <p className="text-red-600 font-normal text-lg  p-4">This page is available to verified traders only</p>
            </div>
            </div>

          </Layout>
}
export default Auth(Earnings)