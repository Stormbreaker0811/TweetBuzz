import React, { useState } from 'react'
import './Register.css';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Google from '@mui/icons-material/Google';
import Apple from '@mui/icons-material/Apple';
import Divider from '@mui/joy/Divider';
import { Link as RouterLink } from 'react-router-dom';

const Register = ({ toggleRegister }) => {

    const [register,setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const toggleForm = () => {
        setRegister(!register);
    }

    const registerForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <Input placeholder='' />
            </form>
        )
    }

    return (
    <div className='register-form'>
        <div className="sign-up">
        <h2 className='join-title'>Join today</h2>
        <div className='joinBtns'>
            <Button className='googleBtn' startDecorator={<Google />}>Sign Up With Google</Button>
            <br /><Button className='appleBtn' startDecorator={<Apple />}>Sign Up With Apple</Button>
        </div>
        <div className="divider">
            <Divider orientation='horizontal'>OR</Divider>
        </div>
        <div className="create-account">
            <br /><Button className='accountBtn' variant='solid' onClick={toggleForm}>Create Account</Button>
        </div>
        <div className="login">
        Already an User? <RouterLink className='link' onClick={toggleRegister}>Login Here!</RouterLink>
        </div>
        </div>
    </div>
    )
}

export default Register;
