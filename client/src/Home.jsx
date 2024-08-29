import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='bg-dark d-flex flex-column justify-content-center align-items-center vh-100'>
            <div>
                <img src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1724307774/analyticsinsight_import_wp-content_uploads_2021_09_Anji-G-Reddy_ut6aui.jpg'
                    className='w-100 mt-3 mb-3 rounded-2' />
            </div>
            <h1 className='text-success '>
                Welcome to the Visionsoft Aspac Pvt Ltd., Have a wounderful day!
            </h1>
            <h3 className='text-primary'>Make Analytics easy with Hanelytics</h3>
            <div className='mt-4'>

                <Link to="/login">
                    <button className='text-decoration-none text-white bg-primary rounded-4 border-none p-3' style={{ fontWeight: 700 }}>
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
