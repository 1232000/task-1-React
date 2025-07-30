import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer className='text-white'>
      <div className="container-fluid">
          <div className='p-5 bg-navy row'>

            <div className='p-5 col-md-4'>
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
              
              <div className='p-5 col-md-4'>
                <h3>AROUND THE WEB</h3>
                <ul className='d-flex justify-content-center gap-3'>
                  <li>
                    <i className='fa-brands fa-facebook'></i>
                  </li>
                  <li>
                    <i className='fa-brands fa-twitter'></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe"></i>
                  </li>
                </ul>
              </div>
              
              <div className='p-5 col-md-4'>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>

          </div>
      </div>

      <div className='bg-dark-navy p-3 '>
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  )
}
