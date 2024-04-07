import { useLocation } from 'react-router-dom';
import { colors } from 'styles/colors';
import LoginPage from './login/Login';
import RegisterPage from './register/Register';
import { Box } from '@mui/material';
import { Auth, Form } from './styles';
import { useState } from 'react';
import { instance } from '../../utils/axios';

const AuthRootComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        const user = await instance.post('auth/login', userData)
        console.log('user', user.data)
    }
    return (
        <Auth>
            <Form onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    flexDirection='column'
                    maxWidth={560}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={`5px 5px 10px ${colors.baseGray50}`}
                >
                    {location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword}/> : location.pathname === '/register' ? <RegisterPage />: null}
                </Box>    
            </Form>   
        </Auth>
    );

        
};

export default AuthRootComponent;