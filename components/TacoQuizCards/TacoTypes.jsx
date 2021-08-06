import React from 'react'

const tacos = {
  meat: [
    {
      title: 'yy',
      type: 'Al Pastor',
      imgURL: 'https://cdn.bbqpit.de/wp-content/uploads/2020/04/17214849/Tacos-al-Pastor.jpg'
    },
    {
      title: 'yy',
      type: 'Barbacoa',
      imgURL: 'https://images.themodernproper.com/billowy-turkey/production/posts/Slow-Cooker-Barbacoa-Beef-16.jpg?w=667&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599766756&s=0872078d7239bb30f1f484fa5d76a249'
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

export const TacoTypes = ({quizStep, prevQuizStep, nextQuizStep}) => {
    return (
      <div className={quizStep === 1 ? 'block' : 'hidden'}>
        <div>
            <p>Taco Types are: all you find in the object</p>
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
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yallow-600 md:py-4 md:text-lg md:px-10"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    )
}