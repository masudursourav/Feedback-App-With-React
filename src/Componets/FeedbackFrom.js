import React, { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './Shared/Button';
import Card from './Shared/Card'

const FeedbackFrom = ({handelAdd}) => {
    const [text,setText] =  useState('');
    const [btnDisabled,setBtnDisabled] =  useState(true);
    const [message,setMessage] =  useState('');
    const [rating,setRating] =  useState(1);
    const handelChange = (e)=>{
               if(text === ''){
                setBtnDisabled(true);
                setMessage(null);
               }
               else if(text!=='' && text.trim().length <10){
                setBtnDisabled(true);
                setMessage('Please Type At Least 10 Characters');
               }
               else{
                setMessage(null);
                setBtnDisabled(false);
               }
               setText(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback={
                text,rating
            }
            handelAdd(newFeedback);
            setText('');
        }
    }
    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How Would You Like To Rate Us ? </h2>
                    <RatingSelect select={(rating)=>setRating(rating)}></RatingSelect>
                    <div className="input-group">
                        <input onChange={handelChange} type="text" value={text} placeholder='Write Your Review' />
                        <Button type="submit" version="primary" isDisable={btnDisabled}>Send</Button>
                    </div>
                    {message && <div className='message'>{message}</div> }
                </form>
            </Card>
        </div>
    );
};

export default FeedbackFrom;