import React from 'react'
import { Link } from 'react-router-dom'

const  footer   = () => {
  return (
    <div className='footer'> 
        <h4 className='text-center'>All Right Reserved &copy; IntiriousD&C  </h4>
        <p className="text-center mt-3 text-decoration-none">
            <Link to="/about">About
            </Link>  |
            <Link to="/contact"> Contact
            </Link>  |
            <Link to="/policy"> Privacy Policies
            </Link>
        </p>
    </div>
  )
}

export default  footer  