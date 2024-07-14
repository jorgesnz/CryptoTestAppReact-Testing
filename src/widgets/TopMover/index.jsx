// styling
import styles from './style.module.scss';

// components
import Spring from '@components/Spring';
import AuthorCard from '@components/AuthorCard';
import AuthorItems from '@components/AuthorItems';
import CollapsedText from '@components/CollapsedText';

// utils
import {memo} from 'react';

// hooks
import useMeasure from 'react-use-measure';

// data placeholder
import mover from '@db/mover';

const TopMover = () => {
    const [textRef, {width : textWidth}] = useMeasure();
    const [headerRef, {height : headerHeight}] = useMeasure();

    return (
        <Spring className="widget">
            <div className="widget_header">
                <span className="symbol">🔥</span>
                <h2>Más Activos Última Semana</h2>
            </div>
            <div className="card h-100" style={{overflow: 'hidden'}}>
                <div className={styles.header} ref={headerRef}>
                    <AuthorCard author={mover}/>
                    <div ref={textRef}>
                        <CollapsedText text={mover.bio} className="text-light" width={textWidth}/>
                    </div>
                </div>
                <div className={styles.content}
                     style={{height: `calc(100% - ${headerHeight}px - 16px`}}>
                    <AuthorItems author={mover} bg="widget-bg" withBorder withPadding/>
                </div>
            </div>
        </Spring>
    )
}

export default memo(TopMover);