import React, { useState } from 'react';
import styles from './style.module.scss';
import AuthLayout from '@components/AuthLayout';
import LabelField from '@components/LabelField';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useThemeProvider } from '@contexts/themeContext';

const SignIn = () => {
    const { theme } = useThemeProvider();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignIn = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { token, userId } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);  // Asegúrate de que el userId se almacena en localStorage
            navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Correo o contraseña incorrectos');
            } else {
                setError('Error iniciando sesión');
            }
            console.error('Error iniciando sesión', error);
        }
    };

    return (
        <AuthLayout title="Iniciar Sesión">
            <div className="flex-1">
                <div className="d-flex flex-column g-32">
                    <div className={`${styles.header} d-flex flex-column align-items-center g-16`}>
                        <h1>Iniciar Sesión</h1>
                    </div>
                    <div className="d-flex flex-column g-16">
                        <LabelField
                            id="email"
                            label="Email o Número de Teléfono"
                            placeholder="ejemplo@dominio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <LabelField
                            id="password"
                            label="Contraseña"
                            placeholder="******"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className={`btn ${theme === 'dark' ? 'btn--hover-grey' : ''}`} onClick={handleSignIn}>
                            Iniciar Sesión
                        </button>
                        {error && <p className={styles.error}>{error}</p>}
                    </div>
                </div>
                <div className="auth-footer">
                    <p className="label">¿No tienes una cuenta?</p>
                    <NavLink className={`btn ${theme === 'dark' ? 'btn--grey' : 'btn--invert'}`} to="/sign-up">
                        Crear Cuenta
                    </NavLink>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignIn;
