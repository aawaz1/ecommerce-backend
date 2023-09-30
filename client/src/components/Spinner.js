import React , {useEffect, useState} from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] =  useState(3)
    const navigate = useNavigate()
    const location = useLocation()
   
    
    useEffect(() =>{
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);

        },1000)
        count === 0 && navigate("/", {
          state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate , location])
  return (
   <>
   <div className="d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
    <h1 className='Text-centre'> redirecting you to in {count} second</h1>
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
</>
  )
}

export default Spinner