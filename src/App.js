import {v4 as uuidV4} from 'uuid'  
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import FeedbackFrom from './Componets/FeedbackFrom';
import FeedbackList from './Componets/FeedbackList';
import FeedbackStats from './Componets/FeedbackStats';
import Header from './Componets/Header';
import FeedbackData from './data/FeedbackData';
import About from './Pages/About';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm('Are You sure to delete ? ')){
      setFeedback(feedback.filter((item)=> item.id !== id ))
    }
  }

  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidV4();
    setFeedback([newFeedback, ...feedback])

  }
  return (
    <Router>
    <Header/>
    <div className="container">
      <Routes>
      <Route exact path ='/'  element={
      <>
      <FeedbackFrom handelAdd = {addFeedback} />
      <FeedbackStats feedback = {feedback}/>
      <FeedbackList feedback = {feedback} handelDelete = {deleteFeedback} />
      </>
      }>
      </Route>
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
