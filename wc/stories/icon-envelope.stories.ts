export default {
  title: 'Icons/Envelope',
  component: 'dsa-envelope-icon',
  argTypes: {
    wrapperColor: { control: 'color' },
    iconColorProp: { control: 'color' },
    wrapperFontSize: {
      options: ['1em', '.5em', '2em', '1rem', '2.5rem', '10px', '14px', '28px'],
      control: 'select',
    },
  },
  args: {
    wrapperColor: 'black',
    wrapperFontSize: '1em',
    iconColorProp: undefined,
  },
};

const Template = args =>
  `<p style="color:${args.wrapperColor};font-size:${args.wrapperFontSize}">
    <dsa-envelope-icon color="${args.iconColorProp}"></dsa-envelope-icon> Icon inside parent with color: ${args.wrapperColor} & font-size: ${args.wrapperFontSize}
  </p>
  `;

export const Default = Template.bind({});
