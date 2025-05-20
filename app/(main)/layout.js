import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='container mx-auto my-20 w-11/12'>
        {children}
    </div>
  )
}

export default MainLayout