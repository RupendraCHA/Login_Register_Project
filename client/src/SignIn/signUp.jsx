import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./signIn.css"

function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate("/login")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='bg-container d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-danger p-4 rounded-4 w-25' style={{ opacity: "0.8" }}>
                <h2 className='text-white'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 text-white'>
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input type='text'
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='name'
                            className='rounded-0 form-control'
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className='mb-3 text-white'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type='text'
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            className='rounded-0 form-control'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3 text-white'>
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type='password'
                            placeholder='Enter Password'
                            autoComplete='off'
                            name='password'
                            className='rounded-0 form-control'
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    <button type='submit' className='btn btn-warning w-100 rounded-0' style={{ fontWeight: "600" }}>
                        Register
                    </button>
                </form>
                <p className='text-white'>Already have an account?</p>
                <Link to="/login" className='btn btn-default border w-100 bg-success rounded-0 text-decoration-none' style={{ fontWeight: "600" }}>
                    Login
                </Link>

            </div>
        </div>
    )
}

export default SignUp
