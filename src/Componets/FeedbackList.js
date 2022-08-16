import React from 'react';
import FeedbackItems from './FeedbackItems'
const FeedbackList = ({feedback,handelDelete}) => {
    return (
        <div className = 'feedback-list'>
            {
            feedback.map((item)=>(
                <FeedbackItems key={item.id} 
                item={item} 
                handelDelete = {handelDelete}>

                </FeedbackItems>
            ))}
        </div>
    );
};

export default FeedbackList;