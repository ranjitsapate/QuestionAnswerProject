import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GetAllQuiz from './components/quiz/GetAllQuiz.jsx'
import Quiz from './components/quiz/Quiz.jsx'
import QuizResult from './components/quiz/QuizResult.jsx'
import QuizStepper from './components/quiz/QuizStepper.jsx'
import AddQuestion from './components/question/AddQuestion.jsx'
import UpdateQuestion from './components/question/UpdateQuestion.jsx'
import Admin from './components/Admin.jsx'
import Home from './components/Home.jsx'
import AnswerOptions from '../utils/AnswerOptions.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <layout/>
  </React.StrictMode>,
)
