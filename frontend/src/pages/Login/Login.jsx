import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.init';
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
                const auth = getAuth(app);
                signInWithEmailAndPassword(auth,email,password).then((user) => {
                    if(user){
                        console.log(user);
                        window.location.href = "/home";
                    }
                });
            }else{
                alert("Invalid Credentials");
            }
        }).catch((err) => {console.error(err);})
    }

    const toggleRegister = () => {
        setLogin(!login);
    }

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            const user_data = {
                name: user.displayName,
                email: user.email
            };
            axios.get('/google-login',{
                params: user_data
            }).then((res) => {
                if(res.status === 200){
                    alert(res.data);
                    window.location.href = "/home";
                }
            })
        }).catch((err) => {
            console.error(err);
        })
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
                        <Button startDecorator={<GoogleIcon />} onClick={handleGoogleLogin} >Sign In With Google</Button>
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
