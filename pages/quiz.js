import { useState, useContext } from "react";
import { Navbar } from "../stories/Navbar";
import { TacoCathegories } from "../components/TacoQuizCards/TacoCathegories";
import { TacoTypes } from "../components/TacoQuizCards/TacoTypes";
import { QuizResult } from "../components/TacoQuizCards/QuizResult";
import QuizContext from "../context";

export default function Quiz() {
  const [quizStep, setQuizStep] = useState(0);
  // comment 2
  // In this file first I declared a state for cathergory
  const { setQuizValues } = useContext(QuizContext);

  const nextQuizStep = (cathegory, type) => {
    setQuizStep((currentStep) => currentStep + 1);
    setQuizValues({ cathegory, type });
  };

  const prevQuizStep = () => setQuizStep((currentStep) => currentStep - 1);

  return (
    <div>
      <Navbar />
      <div className="mt-10">
        {quizStep >= 0 && (
          <TacoCathegories
            quizStep={quizStep}
            nextQuizStep={nextQuizStep}
            prevQuizStep={prevQuizStep}
          />
        )}
        {quizStep >= 1 && (
          <TacoTypes
            // comment 4
            // below here I pass that selected cathegory name (e.g. Fish) to each component
            quizStep={quizStep}
            nextQuizStep={nextQuizStep}
            prevQuizStep={prevQuizStep}
          />
        )}
        {quizStep >= 2 && (
          <QuizResult
            quizStep={quizStep}
            nextQuizStep={nextQuizStep}
            prevQuizStep={prevQuizStep}
          />
        )}
      </div>
    </div>
  );
}