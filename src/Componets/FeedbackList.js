import { motion, AnimatePresence } from 'framer-motion'
import React from 'react';
import FeedbackItems from './FeedbackItems'
const FeedbackList = ({feedback,handelDelete}) => {
    return (
        <AnimatePresence>
        <div className = 'feedback-list'>
            {
            feedback.map((item)=>(
                <motion.div key = {item.key} initial = {{opacity:0}}
                 animate ={{opacity:1}} exit={{opacity:0}}
                 >
                <FeedbackItems key={item.id} 
                item={item} 
                handelDelete = {handelDelete}>
                </FeedbackItems>
                </motion.div>
            ))}
        </div>
        </AnimatePresence>
    );
};

export default FeedbackList;