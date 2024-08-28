import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'//import

const Contact = () => {
    const navigate = useNavigate();//Access

    const goToServices = () => {
        navigate("/license");
    };
  return (
    <>
    <Header/>
    <div>
      <h1>Immediately Contact me!</h1>
      <button onClick={()=>goToServices()}>Go to services</button>{/* create button and function */}
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
    </>
  )
}

export default Contact
