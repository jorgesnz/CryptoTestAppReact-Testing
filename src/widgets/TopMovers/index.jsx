// styling
import styles from './style.module.scss';

// components
import Spring from '@components/Spring';
import PeriodButton from '@ui/PeriodButton';
import LazyImage from '@components/LazyImage';

// hooks
import {useState, useEffect} from 'react';
import useDraggableScrollContainer from '@hooks/useDraggableScrollContainer';

// utils
import {numFormatter} from '@utils/helpers';

// data placeholder
import movers from '@db/movers';

const TopMovers = () => {
    const [selected, setSelected] = useState('h12');
    const {containerRef, isDragging} = useDraggableScrollContainer();

    useEffect(() => {
        containerRef.current.scrollLeft = 0;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    return (
        <Spring>
            <div className="widget_body card bordered p-0 h-100">
                <div className={styles.header}>
                    <h2>Top Más Activos</h2>
                    <div className={styles.buttons}>
                        <PeriodButton value="h12" onClick={setSelected} text="12h" selected={selected}/>
                        <PeriodButton value="day" onClick={setSelected} text="1D" selected={selected}/>
                        <PeriodButton value="week" onClick={setSelected} text="1W" selected={selected}/>
                        <PeriodButton value="month" onClick={setSelected} text="1M" selected={selected}/>
                    </div>
                </div>
                <div className={`${styles.container} scroll-container ${isDragging ? 'isDragging' : ''}`}
                     ref={containerRef}>
                    {
                        movers[selected].sort((a, b) => b.income - a.income)
                            .map((mover, index) => (
                                <Spring key={mover.name} index={index} type="slide">
                                    <div className={styles.wrapper}>
                                        <div>
                                            <LazyImage className={styles.avatar} src={mover.avatar} alt={mover.name}/>
                                            <span className={`${styles.avatar_num} h5`}>{index + 1}</span>
                                        </div>
                                        <h4 className={styles.text}>{mover.name}</h4>
                                        <span className="h3">${numFormatter(mover.income)}</span>
                                    </div>
                                </Spring>
                            ))
                    }
                </div>
            </div>
        </Spring>
    )
}

export default TopMovers