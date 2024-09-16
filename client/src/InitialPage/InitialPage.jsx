import React from 'react'
import { Link } from 'react-router-dom'
import "./initialPage.css"

function InitialPage() {
    return (
        <>
            <div className='bg-container'>
                <div className='container d-flex flex-row justify-content-between align-items-center vw-100'>
                    <div>
                        <img src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1724952055/logo-removebg-preview_prabm4.png' className='image-size' />
                        {/* <img src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1726505185/istockphoto-1407983911-612x612_hi0th1.jpg' className='image-size' /> */}
                    </div>
                    {/* <ul className='d-flex flex-row justify-content-between align-items-center text-white'>
                        <li>Product</li>
                        <li>Usecases</li>
                        <li>Industries</li>
                        <li>Contact</li>
                    </ul> */}
                    <div className='d-flex flex-row'>
                        <div className='button-size'>
                            <Link to="/register" className='bg-warning rounded-4 p-2 text-white'
                                style={{ fontWeight: 500, textDecoration: "none" }}>Sign Up</Link>
                        </div>
                        <div>
                            <Link to="/login" className='bg-success rounded-4 p-2 text-white' style={{ fontWeight: 500, textDecoration: "none" }}>Login</Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ paddingTop: "150px" }}>
                    <h1 className='text-center text-white' style={{ fontSize: "34px", marginBottom: "50px" }}>"Artificial
                        Intelligence" & "Machine Learning" Solutions in Supply Chain Injecting Data
                        From Diverse ERP & Non-ERP Sources.</h1>
                    <div className='text-center'>
                        <h3 className='text-white'>Don't have an account, Create it by clicking register...</h3>
                        <Link to="/register">
                            <button className='bg-warning rounded-4 p-2 text-white' style={{ fontWeight: 700 }}>
                                Register Here
                            </button>
                        </Link>
                    </div>
                    <div className='text-center mt-4'>
                        <h3 className='text-white'>Already have an account, click to Login...</h3>
                        <Link to="/login">
                            <button className='bg-success rounded-4 p-2 text-white' style={{ fontWeight: 700 }}>
                                Login Here
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default InitialPage
