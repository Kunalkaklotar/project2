import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
            <div className="d-flex">
                <div className='w_50'>
                    <h1>JOIN US</h1>
                    <h2>New subscribers receive 10% off their first purchase</h2>
                    <div className='mail'>Your email
                    </div><hr />
                </div>
                <div className='w_50 d-flex'>
                    <div className='w_33'>
                        <h1>COURSE</h1>
                        <h4>Graphics Design</h4>
                        <h4>Front & Devlopment</h4>
                        <h4>Back & Devlopment</h4>
                        <h4>Front & Design</h4>
                        <h4>Android Devloper</h4>
                        <h4>Ios Devloper</h4>

                    </div>
                    <div className='w_33'>
                        <h1>SERVICES</h1>
                        <h4>Sale</h4>
                        <h4>Membership</h4>

                    </div>
                    <div className='w_33'>
                        <h1>Contect Us</h1>
                        <h4>Kunal Kaklotar</h4>
                        <h4>kunalkaklotar@gmail.com</h4>
                        <h4>9328478983</h4>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer