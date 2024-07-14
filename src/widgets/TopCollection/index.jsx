// styling
import styles from './style.module.scss';

// components
import Spring from '@components/Spring';
import Search from '@ui/Search';
import NFTAuthorItem from '@components/NFTAuthorItem';
import CollapsedText from '@components/CollapsedText';
import LazyImage from '@components/LazyImage';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState} from 'react';
import {useWindowSize} from 'react-use';
import useMeasure from 'react-use-measure';

// utils
import {numFormatter} from '@utils/helpers';
import {memo} from 'react';

// data placeholder
import collection from '@db/collection';

const TopCollection = () => {
    const {width} = useWindowSize();
    const [query, setQuery] = useState('');
    const {main, data, items} = collection;
    const [textRef, {width: textWidth}] = useMeasure();
    const [headerRef, {height: headerHeight}] = useMeasure();
    const [columnRef, {width: columnWidth}] = useMeasure();
    const [widgetHeaderRef, {height: widgetHeaderHeight}] = useMeasure();

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <Spring className="widget">
            <div className="widget_header" ref={widgetHeaderRef}>
                <span className="symbol">🔥</span>
                <h2>Coleciones Top Última Semana</h2>
            </div>
            <div className="card" style={{height: `calc(100% - ${widgetHeaderHeight}px)`}}>
                <div ref={headerRef}>
                    <div className={styles.cover}>
                        <LazyImage src={main.cover} height={170} width="100%" alt={main.name}/>
                        <div className={`${styles.cover_avatar} avatar avatar--bordered`}>
                            <img src={main.author.avatar} alt={main.author.name}/>
                        </div>
                    </div>
                    <div className={styles.header_wrapper}>
                        <div className="d-flex flex-column g-8" ref={textRef}>
                            <div>
                                <h4 className="text-green">{main.author.name}</h4>
                                <h2>Colección {main.name}</h2>
                            </div>
                            <CollapsedText text={main.description} width={textWidth}/>
                        </div>
                        <div className={`card card--abstract d-grid col-2 g-16 ${width >= 375 ? 'col-4' : ''}`}>
                            <div className="d-flex flex-column" ref={columnRef}>
                                <span className="h2 text-white">{data.floor.toFixed(2)}</span>
                                <CollapsedText className={`${styles.label} text-10`}
                                               width={columnWidth}
                                               text="Floor Price ($)"
                                               withButton={false}/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="h2 text-white">{data.high.toFixed(2)}</span>
                                <CollapsedText className={`${styles.label} text-10`}
                                               width={columnWidth}
                                               text="Highest Traded Price"
                                               withButton={false}/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="h2 text-white">{numFormatter(data.total)}</span>
                                <CollapsedText className={`${styles.label} text-10`}
                                               width={columnWidth}
                                               text="Total Trading Value"
                                               withButton={false}/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="h2 text-white">{numFormatter(data.issue)}</span>
                                <CollapsedText className={`${styles.label} text-10`}
                                               width={columnWidth}
                                               text="Issued Quantity"
                                               withButton={false}/>
                            </div>
                        </div>
                        <Search className="bordered"
                                placeholder="Búscar por NFT"
                                id="top-collection"
                                value={query}
                                onChange={setQuery}/>
                    </div>
                </div>
                <ScrollContainer height={headerHeight} bg="widget-bg">
                    <div className={`${styles.content} track`}>
                        {
                            filteredItems.length > 0 ?
                                <div className="d-grid col-2 g-16">
                                    {
                                        filteredItems.map((item, i) =>
                                            <NFTAuthorItem key={item.id} item={item} index={i}/>
                                        )
                                    }
                                </div>
                                :
                                <div className={styles.placeholder}>No se encontro el NFT</div>
                        }
                    </div>
                </ScrollContainer>
            </div>
        </Spring>
    )
}

export default memo(TopCollection);