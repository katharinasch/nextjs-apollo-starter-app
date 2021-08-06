import { Card } from "../stories/Card";

const cardContent = {
    tacos: [
      {
          title: 'yy',
          cathegory: 'Meat',
          imgURL: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80'
      },
      {
          title: 'yy',
          cathegory: 'Fish',
          imgURL: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
      },
      {
          title: 'zz',
          cathegory: 'Veggi',
          imgURL: 'https://images.unsplash.com/photo-1572527129705-a6c197003d61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
      },
    ],
  }

  export const TacoCathegoryCards = () => {
    return (
        <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
            <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                {cardContent.tacos.map((taco) => (
                    <Card 
                    key={taco.title}
                    title={taco.cathegory}
                    source={taco.imgURL}
                    text={`image of ${taco.cathegory} `}
                    />
                ))}
            </div>
        </div>
    );
  }