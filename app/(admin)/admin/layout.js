import { getAdmin } from '@/actions/admin'
import NotFound from '@/app/not-found';
import Header from '@/components/Header';
import React from 'react'
import Sidebar from './_components/sidebar';


const AdminLayout = async({children}) => {
    const admin = await getAdmin();

    if(!admin.authorized){
        return <NotFound/>
    }

  return (
    <div className='h-full'>
        <Header isAdminPage={true}/>
        <div className=' h-full w-56 flex flex-col top-20 fixed inset-y-0 z-50'>
            <Sidebar/>
        </div>
        <main className='md:pl-56 pt-[80px] h-full '>{children}</main>
    </div>
  )
}

export default AdminLayout