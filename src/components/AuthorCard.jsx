// utils
import dayjs from 'dayjs';

const AuthorCard = ({author, isPrivate = false}) => {
    const {avatar, name, joined, items, collections} = author;

    return (
        <div className="card card--abstract d-flex">
            <div className="d-flex align-items-center g-8 flex-1">
                <img className="avatar" src={avatar} alt={name}/>
                <div className="d-flex flex-column">
                    {
                        isPrivate ?
                            <h3 className="text-white">{name}</h3>
                            :
                            <>
                                <h2 className="text-white">{name}</h2>
                                <span className="text-10">Usuario desde {dayjs(joined).format('MMMM YYYY')}</span>
                            </>
                    }
                </div>
            </div>
            <div className="d-flex flex-column align-items-end text-10">
                 <span className="d-flex align-items-center g-8">
                       Items: <span className="text-accent text-12">{items.length}</span>
                 </span>
                <span className="d-flex align-items-center g-8">
                       Colecciones: <span className="text-accent text-12">{collections.length}</span>
                </span>
            </div>
        </div>
    )
}

export default AuthorCard