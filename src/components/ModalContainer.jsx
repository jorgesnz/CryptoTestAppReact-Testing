// utils
import PropTypes from 'prop-types';
import loadable from '@loadable/component'

// hooks
import {useModal} from '@contexts/modalContext';
import {useWindowSize} from 'react-use';

// components
import Fade from '@mui/material/Fade';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import Spring from '@components/Spring';
const Modal = loadable(() => import('@mui/material/Modal'));

const Slide = ({children}) => <Spring type="slide">{children}</Spring>

const FadeIn = ({children}) => <Fade in timeout={300}>{children}</Fade>

const ModalContainer = ({open, children, isSidebarWidget = false}) => {
    const {handleClose} = useModal();
    const {width} = useWindowSize();

    const AnimatedWrapper = isSidebarWidget && width >= 768 ? Slide : FadeIn;
    const props = isSidebarWidget && width > 1280 ? {reverse: !open} : {};

    return (
        <Modal open={open}
               onClose={handleClose}
               closeAfterTransition
               componentsProps={{backdrop: {className: isSidebarWidget ? 'backdrop-sidebar' : ''}}}>
            <Fade in={open} timeout={300}>
                <div className={`modal-container ${isSidebarWidget ? 'modal-container-sidebar' : ''}`}>
                    <ClickAwayListener onClickAway={handleClose}>
                       <div className="modal">
                           <AnimatedWrapper {...props}>
                               {children}
                           </AnimatedWrapper>
                       </div>
                    </ClickAwayListener>
                </div>
            </Fade>
        </Modal>
    )
}

ModalContainer.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default ModalContainer