import { useState } from 'react';
import './App.css';
import FeedbackFrom from './Componets/FeedbackFrom';
import FeedbackList from './Componets/FeedbackList';
import FeedbackStats from './Componets/FeedbackStats';
import Header from './Componets/Header';
import FeedbackData from './data/FeedbackData';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm('Are You sure to delete ? ')){
      setFeedback(feedback.filter((item)=> item.id !== id ))
    }
  }
  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackFrom/>
      <FeedbackStats feedback = {feedback}/>
      <FeedbackList feedback = {feedback} handelDelete = {deleteFeedback} />
    </div>
    </>
  );
}

export default App;
