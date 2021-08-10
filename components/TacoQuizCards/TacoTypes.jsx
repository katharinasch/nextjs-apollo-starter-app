import React, { useContext, useState } from "react";
import { Card } from "../../stories/Card";
import QuizContext from "../../context";

const tacos = {
  meat: [
    {
      title: 'yy',
      type: 'Al Pastor',
      imgURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190130-tacos-al-pastor-horizontal-1-1549571422.png?crop=0.668xw:1.00xh;0.175xw,0&resize=480:*'
    },
    {
      title: 'yy',
      type: 'Barbacoa',
      imgURL: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/02/Barbacoa-Tacos-3.jpg'
    },
    {
      title: 'zz',
      type: 'Chorizo',
      imgURL: 'https://www.seriouseats.com/thmb/-8LIIIObcZMUBy-9gXlMsHcaeMI=/610x458/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__04__20140428-sloppy-joe-chorizo-taco-recipe-food-lab-lite-8-503212a07b0a4d499952ff40aed57694.jpg'
    },
  ],
  fish: [
    {
      title: 'yy',
      type: 'Camaron',
      imgURL: 'https://juegoscocinarpasteleria.org/wp-content/uploads/2019/07/1563435179_315_Tacos-De-Camarones-Con-Crema-De-Cal-Y-Cilantro.jpg'
    },
    {
      title: 'yy',
      type: 'Salmon',
      imgURL: 'https://www.cookingclassy.com/wp-content/uploads/2015/04/salmon-tacos-with-avocado-salsa4-srgb..jpg'
    },
    {
      title: 'zz',
      type: 'Pulpo',
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5710a8b3e707ebb8c58fea2c/1590075315244-QNXQE1LGPH06HV3EDF6B/tacos_34.jpg?format=1000w'
    },
  ],
  veggi: [
    {
      title: 'yy',
      type: 'Cauliflower',
      imgURL: 'https://minimalistbaker.com/wp-content/uploads/2017/07/DELICIOUS-Roasted-Cauliflower-Tacos-with-Adobo-Romesco-30-min-healthy-SO-flavorful-vegan-glutenfree-plantbased-cauliflower-tacos-recipe-8.jpg'
    },
    {
      title: 'yy',
      type: 'Avocado',
      imgURL: 'https://www.ambitiouskitchen.com/wp-content/uploads/2018/03/tacos.jpg'
    },
    {
      title: 'zz',
      type: 'Tofu',
      imgURL: 'http://www.fromachefskitchen.com/wp-content/uploads/2016/08/Tofu-and-Black-Bean-Tacos.jpg'
    },
  ],
}

// added cathegory into 'arguments'

export const TacoTypes = ({quizStep, prevQuizStep, nextQuizStep}) => {
  const { data: { cathegory = "" } = {} } = useContext(QuizContext);
  const [isSelected, setisSelected] = useState();


  
  // defined taco
  const chosenTacoCathegory = tacos[cathegory.toLowerCase()];

    return (
      <div className={quizStep === 1 ? 'block' : 'hidden'}>
        <div className="relative max-w-xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">
              Let&apos;s get into details. Which of the {cathegory} Tacos are your favourite?
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="mt space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {chosenTacoCathegory.map((item, index) => (
              <Card
                role="button"
                key={index}
                title={item.type}
                source={item.imgURL}
                text={`image of ${item.title} `}
                selected={ isSelected === index }
                onChange={() => setisSelected(index)}
              />
            ))}
          </div>
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
              onClick={() => nextQuizStep('Meat', (chosenTacoCathegory?.[isSelected]?.type)) }
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    )
}