import React, { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [mobileNo,setMobileNo] = useState('');
    const [formData,setFormData] = useState({
        Email: '',
        Mobile: '',
        Password: ''
    });
    
    const handleSubmit = () => {

    }

    return (
    <div className='login-container'>
        <div className="form-container">
            <h1>Its Happening Now</h1>
            <form onSubmit={handleSubmit}>
                
            </form>
        </div>
    </div>
    )
}

export default Login
