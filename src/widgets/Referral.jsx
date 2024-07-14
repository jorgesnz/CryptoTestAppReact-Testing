// components
import Voucher from '@components/Voucher';
import WidgetHeader from '@components/WidgetHeader';
import CopyField from '@components/CopyField';
import Spring from '@components/Spring';

// assets
import iconLight from '@assets/icons/icon-invite-light.svg';
import iconDark from '@assets/icons/icon-invite-dark.svg';

const Referral = () => {
    return (
        <Spring className="widget">
            <WidgetHeader title="Programa de Referidos" iconLight={iconLight} iconDark={iconDark}/>
            <div className="widget_body card h-2">
                <h2>Programa de Referidos</h2>
                <Voucher style={{marginTop: '-8px'}} />
                <div className="d-flex flex-column g-8">
                    <h2>Detalles</h2>
                    <p className="text-14 text-overflow">Copia tu código de referido y compartelo con tus amigos</p>
                    <CopyField label="Código Referido" value="bc2w-qkj7-834-jj0h-458h-dwawp-q034" />
                    <CopyField label="Link Referido" value="https://cryptotestapp/ref='23177'" />
                </div>
            </div>
        </Spring>
    )
}

export default Referral