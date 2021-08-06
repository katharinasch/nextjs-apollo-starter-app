import {Card} from './Card';

export default {
    title: 'Example/Card',
    component: Card,
  };


export const DefaultCard = () => <Card />
  
const Template = (args) => <Card {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  label: 'Button',
};

export const notSelected = Template.bind({});
notSelected.args = {
  label: 'Button',
};