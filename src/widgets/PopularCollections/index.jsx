// styling
import styles from './style.module.scss';

// components
import CollectionItem from '@components/CollectionItem';
import Spring from '@components/Spring';
import PeriodButton from '@ui/PeriodButton';

// hooks
import useDraggableScrollContainer from '@hooks/useDraggableScrollContainer';
import {useState, useEffect} from 'react';

// utils
import {memo} from 'react';

// data placeholder
import collections from '@db/collections';

const PopularCollections = ({standalone = true}) => {
    const [selected, setSelected] = useState('h12');
    const dailyTrending = collections.filter(collection => collection.trending === 'h12');
    const trendingByPeriod = collections.filter(collection => collection.trending === selected);
    const {containerRef, isDragging} = useDraggableScrollContainer();

    useEffect(() => {
        containerRef.current.scrollLeft = 0;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    return (
        <Spring>
            <div className={`${standalone ? 'card' : 'h-100 d-flex flex-column justify-content-between'}`}>
                <div className={` ${standalone ? styles.wrapper : styles.header}`}>
                    <h2>{standalone && 'Colecciones '} Más Populares</h2>
                    {
                        standalone &&
                        <div className="d-flex g-8">
                            <PeriodButton value="h12" onClick={setSelected} text="12h" selected={selected}/>
                            <PeriodButton value="day" onClick={setSelected} text="1D" selected={selected}/>
                            <PeriodButton value="week" onClick={setSelected} text="1W" selected={selected}/>
                            <PeriodButton value="month" onClick={setSelected} text="1M" selected={selected}/>
                        </div>
                    }
                </div>
                <div className={`d-flex g-8 ${standalone ? 'p-16' : 'pr-16'} scroll-container ${isDragging ? 'isDragging' : ''}`}
                     ref={containerRef}
                     style={{marginRight: standalone ? 0 : -16}}>
                    {
                        (standalone ? trendingByPeriod : dailyTrending).map((item, i) => (
                            <CollectionItem key={item.id} item={item} index={i} animation="slide" withBorder withFixedWidth />
                        ))
                    }
                </div>
            </div>
        </Spring>
    )
}

export default memo(PopularCollections);