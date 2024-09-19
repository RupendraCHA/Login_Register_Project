import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001/home')
            .then(result => {
                console.log(result)
                if (result.data !== "Successful") {
                    navigate("/login")
                } else {
                    navigate("/home")
                }

            })
            .catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        axios.get("http://localhost:3001/logout")
            .then(result => {
                if (result.data === "Logged Out") {
                    navigate("/login")
                }
            })
    }

    return (
        <div className='bg-dark d-flex flex-column justify-content-center align-items-center vh-100'>
            <div>
                {/* <a target='_blank' style={{ textDecoration: "none" }} href="https://app.powerbi.com/links/JTnfzld7WT?ctid=d77ec4e8-c88b-431b-8d7f-77755a4bbefc&pbi_source=linkShare">
                    <img src='https://res.cloudinary.com/dvxkeeeqs/image/upload/v1724307774/analyticsinsight_import_wp-content_uploads_2021_09_Anji-G-Reddy_ut6aui.jpg'
                        className='w-100 mt-3 mb-3 rounded-2' />
                    
                </a> */}
                <h1 style={{ padding: "20px", color: "#fff", fontWeight: "bold", fontFamily: "Roboto", borderRadius: "12px", backgroundColor: "#000", border: "3px solid #0000ff", marginBottom: "20px" }}>Hanelytics</h1>

            </div>
            <h3 className='text-success text-capitalize'>Make AI/ML Predictions easy with Hanelytics</h3>
            <div className='mt-4'>

                <Link to="/dataModeling">
                    <button className='text-decoration-none text-white bg-primary rounded-4 border-none p-3 m-3' style={{ fontWeight: 700 }}>
                        Data Modeling
                    </button>
                </Link>
                <Link to="/login">
                    <button className='text-decoration-none text-danger bg-warning rounded-4 border-none p-3'
                        style={{ fontWeight: 700, opacity: 0.8 }}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default Home
