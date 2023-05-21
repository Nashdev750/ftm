import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head'
import { UserProvider } from '@/context/User';


export default function App({ Component, pageProps }) {
  return <> 
    <Head>
      <title>Forex prop firm | Fund Me Forex</title>
    </Head>
    <ToastContainer/>
    <UserProvider>
    <Component {...pageProps} />
    </UserProvider>
    </>
}
