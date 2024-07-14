// utils
import dayjs from 'dayjs';

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const HistoryItem = ({ item }) => {
    return (
        <div className="d-flex align-items-center g-10">
            <img className="avatar" src={item.image} alt={item.name}/>
            <div className="d-flex flex-column g-4 lh-1">
                <p className="d-inline-flex align-items-center g-4">
                    {item.text} <span>by</span> <span className="h4">{item.name}</span>
                </p>
                <span className="text-10 text-light">{dayjs(item.date).fromNow()}</span>
            </div>
        </div>
    )
}

export default HistoryItem