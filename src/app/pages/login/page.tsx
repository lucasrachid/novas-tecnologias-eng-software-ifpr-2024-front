"use client"
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./page.scss";
import HttpService from '@/app/services/httpService';

export default function Login() {

    const httpService = new HttpService();

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setLoginInfo(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const authentication = async () => {
        const authBody = { username: loginInfo.username, password: loginInfo.password };
        const response = await httpService.post('/api/token/', authBody);
        console.log(response);
    };

    return (
        <main className="">
            <div className="flex flex-col h-[200px] justify-around">
                <TextField
                    id="username"
                    label="Login"
                    variant="outlined"
                    value={loginInfo.username}
                    onChange={handleChange}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    size="large"
                    onClick={authentication}>
                    Acessar
                </Button>
            </div>
        </main>
    );
}