import { Navlink } from './Navlink';

export default {
  title: 'Example/Navlink',
  component: Navlink,
};

const Template = (args) => <Navlink {...args} />;

export const Active = Template.bind({});
Active.args = {
  active: true,
  text: 'Home',
};

export const notActive = Template.bind({});
notActive.args = {
  text: 'Quiz',
};
