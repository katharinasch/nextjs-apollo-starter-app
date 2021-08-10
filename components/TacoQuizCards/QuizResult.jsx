import { useContext, useState } from "react";
import QuizContext from "../../context";

export const QuizResult = ({quizStep, prevQuizStep, nextQuizStep}) => {
  const { data: { type = "" } = {} } = useContext(QuizContext);
    return (
      <div className={quizStep === 2 ? 'block' : 'hidden'}>
        <div className="relative max-w-xl mx-auto">
        {type==='Chorizo' ? 
          <div className="text-center"><h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">I like {type} tacos too  🎉!</h2></div> : 
          <div className="text-center"><h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl"> Sorry {type} tacos are not my favourite tacos 😭! Try again!</h2></div> }
        </div>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <a role="button" tabIndex={0}
                onClick={prevQuizStep}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
              >
                Back
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                onClick={nextQuizStep}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-200 hover:bg-gray-200 focus:outline-none md:py-4 md:text-lg md:px-10 cursor-not-allowed"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
