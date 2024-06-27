import React, { useState } from 'react'
import './Register.css';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Google from '@mui/icons-material/Google';
import Apple from '@mui/icons-material/Apple';
import Divider from '@mui/joy/Divider';
import { Link as RouterLink } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

const Register = ({ toggleRegister }) => {

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [BtnColor,setBtnColor] = useState('primary');

    axios.defaults.baseURL = 'http://localhost:5000';

    const [proggressState,setProgressState] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            name: name,
            password: password
        };
        axios.post('/register',formData).then((res) => {
            if(res.status === 200){
                alert("User Registered..//");
            }else{
                alert("Something went wrong..//");
            }
        })
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
            <form onSubmit={handleSubmit}>
                <Input startDecorator={<BadgeIcon />} placeholder='Enter Name:' className='input-reg' onChange={(e) => {setName(e.target.value)}} />
                <Input startDecorator={<EmailIcon />} placeholder='Enter Email:' type='email' className='input-reg' onChange={(e) => {setEmail(e.target.value)}} />
                <Input placeholder='Enter Password:' startDecorator={<KeyIcon />} type='password' className='input-reg' onChange={(e) => {setPassword(e.target.value)}} />
                <Button type='submit' className='accountBtn' variant='solid' color={BtnColor}>Create Account</Button>
            </form>
        </div>
        <div className="login">
        Already an User? <RouterLink className='link' onClick={toggleRegister}>Login Here!</RouterLink>
        </div>
        </div>

    </div>
    )
}

export default Register;
