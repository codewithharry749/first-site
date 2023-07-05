import React from 'react'
import { NavLink } from 'react-router-dom';
import data from './Sdata';

const Servises = () => {

  return (

    <>
      <p className='text-center ' id='servise_head'>Educational Facilities & Menternship</p>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          {
            data.map((ele) => {
              const { img, name, description } = ele
              return (
                <div className="card p-1 mt-0 m-2" style={{ width: '20rem',height:'auto' }}>
                  <img className="img-fluid" src={img} alt='...' />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                  </div>
                </div>
              )
            })
          }
</div>
</div>
    </>
  )
}

export default Servises;