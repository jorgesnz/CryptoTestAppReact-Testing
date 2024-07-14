// components
import Spring from '@components/Spring';

const Notification = ({data, index}) => {
    const {title, text, read} = data;

    return (
        <Spring index={index} type="list">
            <div className="d-flex flex-column g-8 p-16 card bordered">
                <h4 className="d-flex align-items-center g-8">
                    {!read && <span className="indicator" />} {title}
                </h4>
                <p>{text}</p>
            </div>
        </Spring>
    )
}

export default Notification