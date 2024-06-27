import React, { useState } from 'react';
import Input from '@mui/joy/Input';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Divider from '@mui/joy/Divider';
import './Login.css';
import twitter from '../../assets/twitter.jpeg';
import GoogleIcon from '@mui/icons-material/Google';
import Register from '../../components/RegisterForm/Register';
import axios from 'axios';


const Login = () => {
    
    const [login,setLogin] = useState(true);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [mobileNo,setMobileNo] = useState('');
    axios.defaults.baseURL = 'http://localhost:5000';
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            Email: email,
            Password: password
        };
        console.log(formData);
        axios.post('/login',formData).then((res) => {
            if(res.status === 200){
                window.location.href = "/home";
            }else{
                alert("Invalid Credentials");
            }
        }).catch((err) => {console.error(err);})
    }

    const toggleRegister = () => {
        setLogin(!login);
    }

    return (
    <div className='login-container'>
        <img src={twitter} alt="Twitter Image" />
        <div className="form-container">
            <h1>Its Happening Now</h1>
            {login ? (
                <>
                    <form onSubmit={handleSubmit}>
                        <Input placeholder='Enter Email: ' className='input' onChange={((e) => setEmail(e.target.value))}/>
                        <Input placeholder='Enter Password: ' type='password' className='input' onChange={((e) => setPassword(e.target.value))} />
                        <Button className='loginBtn' type='submit'>Login</Button>
                    </form>
                    <div className="signin-container">
                        Not a User? <RouterLink className='link' onClick={toggleRegister}>Register Here!</RouterLink>
                    </div>
                    <div className="divider">
                        <Divider orientation='horizontal'>OR</Divider>
                    </div>
                    <div className="google-button">
                        <Button startDecorator={<GoogleIcon />}>Sign In With Google</Button>
                    </div>
                </>
            ) : (
                <>
                <Register toggleRegister={toggleRegister} />
                </>
            )}
        </div>
    </div>
    )
}

export default Login
