import { formatArgs } from '../../utils/utils';

export default {
  title: 'Example/MyComponent',
  component: 'my-component',
};

const Template = args => `<my-component ${formatArgs(args)}></my-component>`;

export const Default = Template.bind({});
Default.args = {
  first: 'Testward',
  middle: 'Testopher',
  last: 'Testmond',
};
