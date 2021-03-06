 // highlight-line

import { ApolloServer, gql } from 'apollo-server-micro';
import Cors from 'micro-cors';
import useSWR from 'swr'

const cors = Cors();

// This data will be returned by our test endpoint. Not sure if I need id? https://apuyou.io/blog/serverless-graphql-apollo-server-nextjs
const tacos = [
    {
      cathegory: 'meat',
      type: 'Al Pastor',
      like: false,
      imgURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190130-tacos-al-pastor-horizontal-1-1549571422.png?crop=0.668xw:1.00xh;0.175xw,0&resize=480:*'
    },
    {
      cathegory: 'meat',
      type: 'Barbacoa',
      like: false,
      imgURL: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/02/Barbacoa-Tacos-3.jpg'
    },
    {
      cathegory: 'meat',
      type: 'Chorizo',
      like: true,
      imgURL: 'https://www.seriouseats.com/thmb/-8LIIIObcZMUBy-9gXlMsHcaeMI=/610x458/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__04__20140428-sloppy-joe-chorizo-taco-recipe-food-lab-lite-8-503212a07b0a4d499952ff40aed57694.jpg'
    },

  
    {
      cathegory: 'fish',
      type: 'Camaron',
      like: true,
      imgURL: 'https://juegoscocinarpasteleria.org/wp-content/uploads/2019/07/1563435179_315_Tacos-De-Camarones-Con-Crema-De-Cal-Y-Cilantro.jpg'
    },
    {
      cathegory: 'fish',
      type: 'Salmon',
      like: false,
      imgURL: 'https://www.cookingclassy.com/wp-content/uploads/2015/04/salmon-tacos-with-avocado-salsa4-srgb..jpg'
    },
    {
      cathegory: 'fish',
      type: 'Pulpo',
      like: false,
      imgURL: 'https://images.squarespace-cdn.com/content/v1/5710a8b3e707ebb8c58fea2c/1590075315244-QNXQE1LGPH06HV3EDF6B/tacos_34.jpg?format=1000w'
    },


    {
      cathegory: 'veggi',
      type: 'Cauliflower',
      like: true,
      imgURL: 'https://minimalistbaker.com/wp-content/uploads/2017/07/DELICIOUS-Roasted-Cauliflower-Tacos-with-Adobo-Romesco-30-min-healthy-SO-flavorful-vegan-glutenfree-plantbased-cauliflower-tacos-recipe-8.jpg'
    },
    {
      cathegory: 'veggi',
      type: 'Avocado',
      like: true,
      imgURL: 'https://www.ambitiouskitchen.com/wp-content/uploads/2018/03/tacos.jpg'
    },
    {
      cathegory: 'veggi',
      type: 'Tofu',
      like: false,
      imgURL: 'http://www.fromachefskitchen.com/wp-content/uploads/2016/08/Tofu-and-Black-Bean-Tacos.jpg'
    },

]

// Defining graphql schema, describing, what the API can do
// typeDefs is a short form for type definition. It is a JS Object with a bunch of properties
// Using a special language called graphql schema definition language
// 1. Define a type called Taco. It's a bit like defining a class in JS
// 2. Declare which fields belong to this type

const typeDefs = gql`
  type Taco {
    cathegory: String
    type: String
    like: Boolean
    imgURL: String
  }

# We've defined the objects that exist in our data graph, but clients don't yet have a way to fetch those objects. 
# Query defines available queries for clients to execute

  type Query {
    # tacos has the list of [Taco], meaning tacos consist of, cat, type, imgURL, included in Taco type above
    # Returns queries of type Taco
    tacos(cathegory: String, like: Boolean): [Taco]
  }
`;

// resolver (????????????????????????????) - 'explains' the GraphQL Server, what to do with the query
// How are we going to return the values
// Resolvers need to match the structure of type definitions
// Query is a nested object and represents type
// Query ??? ???????????? ???? ????????????
// resolver ??? what to do, when Query or Mutation happens
// Resolvers can return objects or scalars like Strings, Numbers, Booleans, etc.
const resolvers = {
  Query: {
    // ???????????????????????????? ?????????????? ?? ???????????? Query
    tacos: (parent, args, context, info) => {
      return tacos.filter((taco) => {
        if(Reflect.has(args, 'like')) {
          return taco.cathegory === args.cathegory && taco.like === args.like;
        }
        return taco.cathegory === args.cathegory;
        })
    },
  },
}

const corsHandler = async (req, res) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start()
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com')
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
// request handler, ?????????????? ?????????????? ???????????????????? ???????????? ?????? ?????????? ???? ???????????? ???????????????? ????????????
  return server.createHandler({
    path: '/api/graphql',
  })(req, res);

};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(corsHandler)

/* const { data, error } = useSWR(gql`
  query getCathegory ($cathecory: String, $like: Boolean ) {
  tacos(cathegory:$cathecory, like: $like ) {
    like
    type
  }
}
`, fetcher);

const fetcher = (query, cathegory) => request('/api/graphql', query, {cathegory});
const { data, error } = useSWR([gql`query lalbalab()`, cathegory], fetcher); */


/* const cathegory = "veggi"
request(url, { cathegory })
request(url, { cathegory: cathegory })
request(url, { cathegory: "veggi" })


const reqstOptions = {
  cathegory: cathegory
  }
  const restOptions = {
  cathegory
  }
 */