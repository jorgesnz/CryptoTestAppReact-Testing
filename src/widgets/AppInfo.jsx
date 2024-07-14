// components
import ModalContainer from '@components/ModalContainer';

// hooks
import {useModal} from '@contexts/modalContext';

const AppInfo = ({isSidebarWidget}) => {
    const {open, modal} = useModal();

    return (
        <ModalContainer open={open && modal === 'info'} isSidebarWidget={isSidebarWidget}>
            <div className="modal card widget_body">
                <div className="d-flex flex-column g-8">
                    <h2>Ayuda</h2>
                    <div className="d-flex flex-column g-8">
                        <button className="modal-element card bordered bordered--hover">
                            Centro de Ayuda <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Terminos de Servicios <i className="icon icon-chevron-right"/>
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-column g-8">
                    <h2>Redes Sociales</h2>
                    <div className="d-flex flex-column g-8">
                        <button className="modal-element card bordered bordered--hover">
                            Siguenos en X <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Sguenos en Instagram <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Sigenos en TikTok <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Siguenos en Facebook <i className="icon icon-chevron-right"/>
                        </button>
                    </div>
                </div>
            </div>
        </ModalContainer>
    )
}

export default AppInfo