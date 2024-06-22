import React from 'react';
import Login from '../components/Login';
import './LoginPage.css';
import backgroundImage from '../assets/background.png';

const LoginPage = ({ onLogin }) => (
    <>
        <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className="login-page-container">
            <h1 className="login-title">Login</h1>
            <div className="rick-and-morty-title">Rick and Morty</div>
            <Login onLogin={onLogin} />
        </div>
    </>
);

export default LoginPage;
