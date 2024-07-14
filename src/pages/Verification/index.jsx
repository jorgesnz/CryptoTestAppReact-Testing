// styling
import styles from './style.module.scss';

// components
import AuthLayout from '@components/AuthLayout';
import LabelField from '@components/LabelField';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const Verification = () => {
    const {theme} = useThemeProvider();

    return (
        <AuthLayout title="Verification">
            <div className="d-flex flex-column g-24 flex-1">
               <div className={`${styles.header} d-flex flex-column g-16`}>
                   <h1>Verificación</h1>
                   <p className={`${styles.header_text} text-14`}>
                       Escribe el código de 8 digitos que hemos enviado por SMS a su teléfono movil
                   </p>
               </div>
               <div className="d-flex flex-column g-40">
                   <div className="d-flex flex-column g-16">
                       <LabelField id="verification-code" label="Código de verificación" placeholder="Escribe el código" />
                       <div className="text-10 lh-1">
                           ¿No recibes el código? <button className={styles.button}>Re-enviar</button>
                       </div>
                   </div>
                   <button className={`btn ${theme === 'dark' ? 'btn--hover-grey' : ''}`}>Confirmar</button>
               </div>
            </div>
        </AuthLayout>
    )
}

export default Verification