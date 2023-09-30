import React from 'react'
import Layout from '../../components/Layout/Layout'

const Form = () => {
  return (
    <Layout>
   <form action="" className='form'>
    <input autoFocus type="text" placeholder='Enter Your Name' />
    <input type="number" placeholder='Enter Your Mobile Number' />
    <button > Lets Talk</button>
   </form>
   </Layout>
  )
}

export default Form