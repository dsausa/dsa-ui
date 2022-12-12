export default {
  title: 'Icons/Object with svg',
  component: 'dsa-icon',
  argTypes: {
    wrapperColor: { control: 'color' },
    wrapperFontSize: {
      options: [
        '1em',
        '.5em',
        '2em',
        '4em',
        '1rem',
        '2.5rem',
        '10px',
        '14px',
        '28px',
      ],
      control: 'select',
    },
    color: { control: 'color' },
    kind: {
      options: [
        'calendar',
        'envelope',
        'identification',
        'information-circle',
        'map-pin',
      ],
      control: { type: 'radio' },
    },
  },
  args: {
    wrapperColor: 'black',
    kind: 'envelope',
    wrapperFontSize: '2em',
    iconColorProp: undefined,
  },
};

const Template = args =>
  `<p style="color:${args.wrapperColor};font-size:${args.wrapperFontSize}">
    <dsa-icon kind="${args.kind}" color="${args.color}"></dsa-icon> ${args.kind}
  </p>
  <p>
    Inside parent with color: ${args.wrapperColor} & font-size: ${args.wrapperFontSize}
  </p>
  `;

export const Default = Template.bind({});
Default.storyName = 'Demo [not working]';
