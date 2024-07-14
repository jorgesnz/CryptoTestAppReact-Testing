// components
import {animated, useSpring} from '@react-spring/web';

// hooks
import {useInView} from 'react-intersection-observer';

// utils
import PropTypes from 'prop-types';

const Spring = ({children, index = 1, className, type = 'fade', ...props}) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    const commonProps = {
        config: {duration: 300},
        delay: 100 * index,
    }

    const fade = useSpring({
        from: {opacity: 0},
        to: {opacity: inView ? 1 : 0},
        ...commonProps,
        ...props
    })

    const slide = useSpring({
        from: {transform: 'translateX(50px)', opacity: 0},
        to: {transform: 'translateX(0)', opacity: 1},
        ...commonProps,
        ...props
    })

    const list = useSpring({
        from: {opacity: 0, transform: 'translateY(40px)'},
        to: {opacity: 1, transform: 'translateY(0px)'},
        ...commonProps,
        ...props
    })

    const spring = {
        fade,
        slide,
        list
    }

    return (
        <animated.div className={className ? className : ''} style={spring[type]} ref={ref}>
            {children}
        </animated.div>
    )
}

Spring.propTypes = {
    index: PropTypes.number,
    className: PropTypes.string,
    type: PropTypes.oneOf(['fade', 'list', 'slide']),
    children: PropTypes.node.isRequired
}

export default Spring
