// import styles from '@/styles/Dashboard.module.css'
// import Sidebar from './Sidebar'
import { getData } from '@/api';
import Login from '@/pages/login';
import { useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { getData } from '@/constants';
// import Login from '@/pages/admin/login';
import React from 'react';
import Loader from './Loader';


const Auth = (Child) => {
      const Layout = () => {
        const [auth, setAuth] = useState(false);
        const [loading, setLoading] = useState(true);
        
        useEffect(() => {
          getData('verify')
            .then((res) => {
              setLoading(false);
              setAuth(true);
            })
            .catch((err) => {
              setLoading(false);
            });
        }, [auth]);
    
        if (loading) return <Wrapper Child={() => <Loader/>} />;
        if (!auth) return <Login/>;
        return <Wrapper Child={Child} />;
      };
    
      return Layout;
    }

export default Auth





const Wrapper = ({Child})=>{
      return <Child/>   
      
}