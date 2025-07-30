import React from 'react';
import boy from '../../assets/images/boy.svg';
export default function Home() {
  return (<>
    <div className='min-vh-83 bg-green d-flex flex-column justify-content-center align-items-center'>
      <img width='250px' className='mb-3' src={boy} alt="boy" />
        <h2 className="mt-4 text-uppercase fw-bold fs-1">start Framework</h2>

        <div className='mt-1 text-white d-flex justify-content-center align-items-center mb-3'>
          <span className='light-line'></span>
          <i className="fa-solid fa-star mx-3"></i>
          <span className='light-line'></span>
        </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </>)
}
