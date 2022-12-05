import { Meta, StoryFn } from '@storybook/web-components';
import { formatArgs, omit } from './utils/utils';

type Component = HTMLElementTagNameMap['dsa-checkbox'] & {
  innerHTML: string;
};

export default {
  title: 'Forms/Checkbox',
  component: 'dsa-checkbox',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/1Hty7YjMHXRHPwbESKUBf1/mydsa-public-01?node-id=174%3A10036',
    },
  },
} as Meta<Component>;

const Template: StoryFn<Component> = args =>
  `<dsa-checkbox ${formatArgs(omit(args, ['innerHTML']))}>${
    args.innerHTML
  }</dsa-checkbox>`;

export const Default: StoryFn<Component> = Template.bind({});
Default.storyName = 'Checkbox';
Default.args = {
  defaultChecked: true,
  innerHTML:
    'I agree to the <a href="#" onclick="return false;">terms and conditions</a>',
  name: 'agree',
};
