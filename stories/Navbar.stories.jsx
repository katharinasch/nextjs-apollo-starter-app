import {Navbar} from './Navbar';

export default {
    title: 'Example/Navbar',
    component: Navbar,
  };


export const DefautlNavbar = () => {
  return (
    <Navbar />
  )
}

DefautlNavbar.story = {
  parameters: {
    nextRouter: {
      path: "/",
      asPath: "/",

    },
  },
};



