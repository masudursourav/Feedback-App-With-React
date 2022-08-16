import {FaTimes} from 'react-icons/fa'
import Card from './Shared/Card';

const FeedbackItems = ({item,handelDelete}) => {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => handelDelete(item.id)}> <FaTimes color='blue'/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

export default FeedbackItems;