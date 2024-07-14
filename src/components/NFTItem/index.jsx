// styling
import styles from './style.module.scss';

// components
import Collapse from '@ui/Collapse';
import HistoryItem from '@components/HistoryItem';
import Spring from '@components/Spring';
import ListButton from '@ui/ListButton';
import LazyImage from '@components/LazyImage';
import {Collapse as MuiCollapse} from '@mui/material';

// hooks
import {useState} from 'react';
import {useWindowSize} from 'react-use';

// assets
import usdt from '@assets/crypto/usdt.svg';

const NFTItem = ({item, index}) => {
    const {width} = useWindowSize();
    const [expanded, setExpanded] = useState(false);

    const generateId = panel => {
        return item.name.toLowerCase().replace(/ /g, '-') + '-' + panel;
    }

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Spring type="list" index={index}>
            <div className="widget_body card">
                <div className={styles.main}>
                    <MuiCollapse className="border-12" in={!expanded} collapsedSize={width >= 414 ? 134 : 80} timeout={300}>
                        <div className={`${styles.main_media} ${expanded ? styles.compact : ''}`}>
                            <LazyImage className={styles.img} src={item.image} alt={item.name}/>
                        </div>
                    </MuiCollapse>
                    <div>
                        <span className="text-green text-600">{item.author}</span>
                        <h2>{item.name}</h2>
                    </div>
                </div>
                <div className="card card--abstract d-flex flex-column g-8">
                    <div className="d-flex justify-content-between text-10">
                        <span className="text-dark">Precio Actual</span>
                        <span className="text-white">USD Price</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between text-white">
                        <div className="d-flex align-items-center g-8 lh-1">
                        <span className="crypto-icon--sm">
                            <img src={usdt} alt="usdt"/>
                        </span>
                            <span className="text-large">{item.price} USDT</span>
                        </div>
                        <span className="text-600">$ {item.price}</span>
                    </div>
                </div>
                <div className="card bordered">
                    <Collapse title="Descripción"
                              id={generateId('description')}
                              expanded={expanded}
                              handleChange={handleChange}>
                        <p>{item.description}</p>
                    </Collapse>
                    <Collapse title="Historial"
                              id={generateId('history')}
                              expanded={expanded}
                              handleChange={handleChange}>
                        <div className="d-flex flex-column g-16">
                            {item.history.map((item, index) => <HistoryItem key={index} item={item}/>)}
                        </div>
                    </Collapse>
                </div>
                <ListButton className="accent"/>
            </div>
        </Spring>
    )
}

export default NFTItem