import React from 'react'
import bgimg from '../materials/lgin.jpg' ;
import { useNavigate } from 'react-router-dom';


function Form() {
    const navigate =useNavigate();
    function handleClick(){
        navigate("/struct")
    }
  return (
    <section>
        <div className="register">
            <div className='col-1'>
                <h2>Sign in</h2>
                <span>Register and enjoy the service</span>

                <form id='form' className='flex flex-col'>
                    <input type="text"  placeHolder='Email'/>
                    <input type="text"  placeHolder='Password'/>
                    <button className='btn' onClick={handleClick}>Sign In</button>
                </form>
            </div>
            <div className="col-2">
                <img src={bgimg} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Form
