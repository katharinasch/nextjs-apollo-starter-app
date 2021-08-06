import { useState } from "react";
import { Navbar } from '../stories/Navbar';

import { TacoCathegories } from '../components/TacoQuizCards/TacoCathegories'
import { TacoTypes } from '../components/TacoQuizCards/TacoTypes'
import { QuizResult } from '../components/TacoQuizCards/QuizResult'


export default function Quiz() {

  const [quizStep, setQuizStep] = useState(0);

  const nextQuizStep = () => setQuizStep((currentStep) => currentStep + 1);

  const prevQuizStep = () => setQuizStep((currentStep) => currentStep - 1);

  return (
    <div>
      < Navbar />
      <div className="mt-10">
        {quizStep >= 0 && (
          <TacoCathegories quizStep={quizStep} nextQuizStep={nextQuizStep} prevQuizStep={prevQuizStep}/>
        )}
        {quizStep  >= 1 && (
          <TacoTypes quizStep={quizStep} nextQuizStep={nextQuizStep} prevQuizStep={prevQuizStep} />
        )}
        {quizStep  >= 2 && (
          <QuizResult quizStep={quizStep} nextQuizStep={nextQuizStep} prevQuizStep={prevQuizStep} />
        )}
      </div>
    </div>
    
  )
}