// components
import ModalContainer from '@components/ModalContainer';
import Switch from '@ui/Switch';
import {NavLink} from 'react-router-dom';
import RangeSlider from '@ui/RangeSlider';
import {ReactComponent as IconFont} from '@assets/icons/icon-font.svg';

// hooks
import {useModal} from '@contexts/modalContext';
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';

const Account = ({isSidebarWidget}) => {
    const {open, modal} = useModal();
    const {theme, setTheme, fontScale, setFontScale} = useThemeProvider();
    const {width} = useWindowSize();

    return (
        <ModalContainer open={open && modal === 'account'} isSidebarWidget={isSidebarWidget}>
            <div className="widget_body card" style={{gap: 8}}>
                <div className="d-flex flex-column bordered">
                    <NavLink className="modal-element border-bottom" to="/verification">
                        <span className="modal-element_wrapper">
                                <i className="icon icon-verification"/> Verificación
                            </span>
                        <i className="icon icon-chevron-right"/>
                    </NavLink>
                    <button className="modal-element border-bottom">
                        <span className="modal-element_wrapper">
                            <i className="icon icon-security"/> Seguridad
                        </span>
                        <i className="icon icon-chevron-right"/>
                    </button>
                    <button className="modal-element border-bottom">
                        <span className="modal-element_wrapper">
                            <i className="icon icon-aml"/> Verificación AML
                        </span>
                        <i className="icon icon-chevron-right"/>
                    </button>
                </div>
                <div className="d-flex flex-column bordered">
                    <button className="modal-element border-bottom">
                        <span className="modal-element_wrapper">
                            <i className="icon icon-lang"/> Lenguaje
                        </span>
                        <span className="d-inline-flex align-items-center g-8 text-light">
                            Español <i className="icon icon-chevron-right"/>
                        </span>
                    </button>
                    <div className="modal-element border-bottom">
                        <span className="modal-element_wrapper">
                            <i className="icon icon-theme"/> Tema Oscuro
                        </span>
                        <Switch id="theme"
                                checked={theme === 'dark'}
                                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                    </div>
                    {
                        width < 768 &&
                        <div className="modal-element border-bottom">
                            <span className="modal-element_wrapper">
                                <IconFont className="icon"/> Escala Texto
                            </span>
                            <RangeSlider value={fontScale}
                                         onChange={e => setFontScale(e.target.value)}
                                         min={1}
                                         max={1.06}
                                         step={0.01}/>
                        </div>
                    }
                    <button className="modal-element border-bottom">
                        <span className="modal-element_wrapper">
                            <i className="icon icon-notification"/> Notificaciones
                        </span>
                        <i className="icon icon-chevron-right"/>
                    </button>
                    <button className="modal-element border-bottom">
                        <span className="modal-element_wrapper">
                            <i className="icon icon-info text-18"/> Cryptotest App Info
                        </span>
                        <span className="d-inline-flex align-items-center g-8 text-light">
                            ver. 2.2.1 <i className="icon icon-chevron-right"/>
                        </span>
                    </button>
                </div>
                <button className="modal-element card bordered">
                    <NavLink to="/sign-in">
                        <span className="modal-element_wrapper">
                            <i className="icon icon-logout"/> Cerrar Sesión
                        </span>
                    </NavLink>
                </button>
                <button className="modal-element card bordered">
                    <span className="modal-element_wrapper modal-element_wrapper--red">
                        <i className="icon icon-delete"/> Borrar Cuenta
                    </span>
                </button>
            </div>
        </ModalContainer>
    )
}

export default Account