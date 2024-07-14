import React, { useState } from 'react';
// styling
import styles from './style.module.scss';

// components
import AuthLayout from '@components/AuthLayout';
import LabelField from '@components/LabelField';
import Checkbox from '@ui/Checkbox';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

// hooks
import { useThemeProvider } from '@contexts/themeContext';

const SignUp = () => {
    const { theme } = useThemeProvider();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async () => {
        try {
            const response = await axios.post('https://cryptotestapp4.netlify.app/api/users', {
                email,
                password,
                firstName,
                lastName
            });
            const userId = response.data.user._id;
            localStorage.setItem('userId', userId);
            navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('El correo electrónico ya está registrado');
            } else {
                setError('Error registrando usuario');
            }
            console.error('Error registrando usuario', error);
        }
    };

    return (
        <AuthLayout title="Sign Up">
            <div className="flex-1">
                <div className="d-flex flex-column g-32">
                    <h1 className={styles.header}>Abrir Cuenta Personal</h1>
                    <div className="d-flex flex-column g-24">
                        <div>
                            <div className="d-flex flex-column g-24">
                                <LabelField
                                    id="first-name"
                                    label="Nombre"
                                    placeholder="Alberto"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <LabelField
                                    id="last-name"
                                    label="Apellidos"
                                    placeholder="Garcia Martin"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
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
                            </div>
                            <div className={styles.checkbox}>
                                <Checkbox id="privacy-policy" label="Continuando aceptas nuestra Politica de Privacidad" />
                            </div>
                        </div>
                        <button className={`btn ${theme === 'dark' ? 'btn--hover-grey' : ''}`} onClick={handleSignUp}>
                            Crear Cuenta Personal
                        </button>
                        {error && <p className={styles.error}>{error}</p>}
                    </div>
                </div>
                <div className="auth-footer">
                    <p className="label">¿Ya tienes una cuenta?</p>
                    <NavLink className={`btn ${theme === 'dark' ? 'btn--grey' : 'btn--invert'}`} to="/sign-in">
                        Iniciar Sesión
                    </NavLink>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignUp;
