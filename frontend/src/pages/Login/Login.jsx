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


const Login = () => {
    
    const [login,setLogin] = useState(true);
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
                        <Input placeholder='Enter Password: ' className='input' onChange={((e) => setEmail(e.target.value))} />
                        <Button className='loginBtn'>Login</Button>
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
