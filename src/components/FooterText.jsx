// components
import CollapsedText from '@components/CollapsedText';

// hooks
import useMeasure from 'react-use-measure';

const FooterText = ({text}) => {
    const [ref, {width}] = useMeasure();
    const placeholder = `
        El tiempo para completar su transacción puede verse afectado, si hay un gran volumen de peticiones
    `;

    return (
        <div className="text-light" ref={ref}>
            <CollapsedText width={width} text={text ? text : placeholder} withButton={false}/>
        </div>
    )
}

export default FooterText