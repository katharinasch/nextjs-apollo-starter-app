import { Card } from "../../stories/Card";
import { useQuizData } from "../../context/index"
import { useState } from "react";

const tacos = [
  {
    cathegory: 'Meat',
    imgURL: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80'
  },
  {
    cathegory: 'Fish',
    imgURL: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
  },
  {
    cathegory: 'Veggi',
    imgURL: 'https://images.unsplash.com/photo-1572527129705-a6c197003d61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
  },
]

export const TacoCathegories = ({quizStep, prevQuizStep, nextQuizStep}) => {
  const { setQuizValues } = useQuizData;
  const [isSelected, setisSelected] = useState();
  const items = [{text: "Meat"}, {text: "Fish"}, {text: "Veggi"}];

  const handleSubmit = (values) => {
    setQuizValues(values);
    prevQuizStep();
    nextQuizStep();
  };

  return (
    <div className={quizStep === 0 ? 'block': 'hidden'}>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">What is your favourite taco group?</h2>
      </div>
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mt space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tacos.map((taco, index) => (
            <Card 
            role="button"
            key={index}
            title={taco.cathegory}
            source={taco.imgURL}
            text={`image of ${taco.cathegory} `}
            selected={isSelected === index}
            onChange={() => setisSelected(index)}
            />
            
          ))}
        </div>
        {tacos[isSelected] && <p>{tacos[isSelected].cathegory}</p>}
        
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow">
            <a role="button" tabIndex={0}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-200 hover:bg-gray-200 focus:outline-none md:py-4 md:text-lg md:px-10 cursor-not-allowed"
            >
              Back
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              onClick={nextQuizStep}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}