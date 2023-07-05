import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = ({ name, img, visit, btName,Ragistration ,btName1 }) => {
    return (

        <div className='container-fluid'>
            <div className='row justify-content-evenly' id='decription'>
                <div className='col-5 d-flex flex-column justify-content-center'>
                    <h1>{name}  <strong className='brand-name' style={{
                        color: 'blueviolet'
                    }}> GravIty AcaDemy</strong></h1>
                    <p className='my-3'>
                        We are the team of talentes developers making website.
                    </p>
                    <div className=''>
                        <button className='btn btn-outline-success text-white mt-2'><NavLink to={visit} >{btName}</NavLink></button>

                        &nbsp;
                        <button className='btn btn-outline-success text-white mt-2'>
                            <NavLink to='/Ragistration'>{btName1}</NavLink>
                        </button>
                    </div>
                </div>
                <div className='col-5 mt-5'>
                    <img src={img} className='img-fluid' />
                </div>
            </div>
        </div>

    )
}

export default Common;