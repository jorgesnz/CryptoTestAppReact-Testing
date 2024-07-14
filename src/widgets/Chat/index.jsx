// styled components
import {Message, Form, Button, DateLabel, FormWrapper} from './style';

// components
import ModalContainer from '@components/ModalContainer';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useModal} from '@contexts/modalContext';
import useMeasure from 'react-use-measure';

// assets
import logo from '@assets/logo-dark.svg';
import avatar from '@assets/avatar.webp';

const Chat = ({isSidebarWidget}) => {
    const [ref, {height}] = useMeasure();
    const {open, modal} = useModal();

    return (
        <ModalContainer open={open && modal === 'support'} isSidebarWidget={isSidebarWidget}>
            <div className="card widget_body h-100 g-0">
                <ScrollContainer height={height} bg="widget-bg">
                    <div className="track">
                        <DateLabel>Hoy</DateLabel>
                        <div className="d-flex flex-column g-24">
                            <div className="d-flex flex-column g-8">
                                <Message>
                                    <div className="content">
                                        <p className="text-header">
                                        Bienvenido al chat en vivo de Cryptotest App. Su consulta es importante para nosotros.
                                        </p>
                                        <span className="timestamp">12:12</span>
                                    </div>
                                </Message>
                                <Message>
                                    <div className="d-flex flex-column g-8">
                                        <div className="container">
                                            <img className="avatar" src={logo} alt="InCrypto Support"/>
                                            <div className="content">
                                                <p className="text-header">
                                                Elija uno de los temas a continuación:
                                                </p>
                                                <span className="timestamp">12:13</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap g-8">
                                            <Button>Comprar Crypto</Button>
                                            <Button>NFT</Button>
                                            <Button>Depósito</Button>
                                            <Button>Retiro</Button>
                                            <Button>Exchange</Button>
                                            <Button>Verificación AML</Button>
                                            <Button>Stacking</Button>
                                        </div>
                                    </div>
                                </Message>
                            </div>
                            <Message>
                                <div className="container">
                                    <img className="avatar" src={avatar} alt="User"/>
                                    <div className="content">
                                        <p className="text-header">
                                            Depósito
                                        </p>
                                        <span className="timestamp">12:13</span>
                                    </div>
                                </div>
                            </Message>
                            <div className="d-flex flex-column g-8">
                                <Message>
                                    <div className="content">
                                        <p className="text-header">
                                            1. Elija la criptomoneda que desea depositar para que se 
                                            genere la dirección adecuada.
                                        </p>
                                        <p className="text-header">
                                            2. Copie la dirección o escanee el código QR (mientras usa la aplicación de billetera externa).
                                        </p>
                                        <p className="text-header">
                                            3. Espere a que llegue su criptografía. Normalmente, esto puede 
                                            tardar entre 10 y 20 minutos en llegar.
                                        </p>
                                        <p className="text-header">
                                            4. Hecho!
                                        </p>
                                        <span className="timestamp">12:13</span>
                                    </div>
                                </Message>
                                <Message>
                                    <div className="d-flex flex-column g-8">
                                        <div className="container">
                                            <img className="avatar" src={logo} alt="InCrypto Support"/>
                                            <div className="content">
                                                <p className="text-header">
                                                    ¿Se resolvió el problema?
                                                </p>
                                                <span className="timestamp">12:14</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap g-8">
                                            <Button>Resuelto</Button>
                                            <Button>Aún no</Button>
                                        </div>
                                    </div>
                                </Message>
                            </div>
                            <Message>
                                <div className="container">
                                    <img className="avatar" src={avatar} alt="User"/>
                                    <div className="content">
                                        <p className="text-header">
                                            Resuelto
                                        </p>
                                        <span className="timestamp">12:15</span>
                                    </div>
                                </div>
                            </Message>
                            <Message>
                                <div className="container">
                                    <img className="avatar" src={logo} alt="InCrypto Support"/>
                                    <div className="content">
                                        <p className="text-header">
                                            Se ha cerrado la conversación.
                                        </p>
                                        <span className="timestamp">12:14</span>
                                    </div>
                                </div>
                            </Message>
                        </div>
                    </div>
                </ScrollContainer>
                <FormWrapper ref={ref}>
                    <Form className="field-input">
                        <input className="flex-1" placeholder="Mensaje"/>
                        <button className="btn btn--pill">Enviar</button>
                    </Form>
                </FormWrapper>
            </div>
        </ModalContainer>
    )
}

export default Chat