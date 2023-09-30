import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Layout>
       <div className='pnf'>
        
        <h1 className='pnf-title'>404</h1>
        <h2 className='pnf-heading'>Oops!! Page Not Found</h2>
        {/* <img  src='https://www.pngarts.com/files/1/Baby-Crying-Transparent-Background-PNG.png' alt='baby' width={'240px'} className='bimg'/> */}
        <Link to='/' className='pnf-btn'>Go Back</Link>
       </div>
      
    </Layout>
   
    
  )
}

export default PageNotFound