// styled components
import {LeaderBoardItem, LeaderBoardList} from './style';

// components
import WidgetHeader from '@components/WidgetHeader';
import NumLabel from '@ui/NumLabel';
import Spring from '@components/Spring';

// hooks
import useMeasure from 'react-use-measure';

// utils
import {memo} from 'react';

// assets
import iconLight from '@assets/icons/icon-cup-light.svg';
import iconDark from '@assets/icons/icon-cup-dark.svg';

const LeaderBoard = () => {
    const [ref, {height}] = useMeasure();

    const data = [
        {name: 'AntonioFX', increase: 28.3},
        {name: 'Codecrypto', increase: 24.6},
        {name: 'Merkulove', increase: 64.6},
        {name: 'CrTrader', increase: 35.9},
        {name: 'Singh', increase: 28.8},
        {name: 'Bitcoinbutler', increase: 23.3},
        {name: 'Coinunlike', increase: 19.6},
        {name: 'Coinfizzle', increase: 14.3},
        {name: 'Orchid', increase: 6.35},
        {name: 'Falcon9', increase: 31.04},
        {name: 'Mars', increase: 16.03},
    ];

    return (
        <Spring className="widget">
            <WidgetHeader title="Líderes" iconLight={iconLight} iconDark={iconDark} innerRef={ref}/>
            <LeaderBoardList className="scroll-y" style={{height: `calc(100% - ${height}px`}}>
                {
                    data.sort((a, b) => b.increase - a.increase)
                        .map((item, index) => (
                            <Spring key={item.name} index={index} type="list">
                                <LeaderBoardItem className={`card ${index === 0 ? 'top' : ''}`}>
                                    <span className="num d-flex flex-center">{index + 1}</span>
                                    <h4 className="title flex-1">{item.name}</h4>
                                    <div className="d-flex align-items-center g-10">
                                                <span className={`${index !== 0 ? 'label text-light' : 'label'}`}>
                                                    Rentabilidad:
                                                </span>
                                        <NumLabel value={item.increase} />
                                    </div>
                                </LeaderBoardItem>
                            </Spring>
                        ))
                }
            </LeaderBoardList>
        </Spring>
    )
}

export default memo(LeaderBoard);