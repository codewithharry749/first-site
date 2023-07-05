import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container-fluid'>
            <div className='row justify-content-evenly' id='decription'>
                    <div className='col-5 d-flex flex-column justify-content-center'>
                        <h1>Grow Your Bussiness with  <strong className='brand-name' style={{
                            color: 'blueviolet'
                        }}> GravIty AcaDemy</strong></h1>
                        <p className='my-3'>
                            We are the team of talentes developers making website.
                        </p>
                        <div className='mt-0'>
                            <button className='btn btn-outline-success text-white'><NavLink to='/Servises' >Get Services</NavLink></button>
                        </div>
                    </div>
                    <div className='col-5 mt-5'>
                        <img src='https://i.pinimg.com/originals/67/b2/a9/67b2a9ba5e85822f237caae92111e938.gif' className='img-fluid' alt='...' />
                    </div>
                </div>
            </div>
      

    )
}

export default Home;