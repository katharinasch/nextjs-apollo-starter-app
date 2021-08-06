import React from 'react'

export const QuizResult = ({quizStep, prevQuizStep, nextQuizStep}) => {
    return (
        
            <div className={quizStep === 2 ? 'block' : 'hidden'}>
              <div>
                  <p>I like chorizo tacos too</p>
              </div>
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
    )
}
