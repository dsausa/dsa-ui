export default {
  title: 'Icons/Inline SVG',
  component: 'dsa-envelope-icon',
  argTypes: {
    wrapperColor: { control: 'color' },
    color: { control: 'color' },
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
    wrapperFontSize: '2em',
    kind: 'envelope',
  },
};

const Template = args =>
  `<p style="color:${args.wrapperColor};font-size:${args.wrapperFontSize}">
    <dsa-${args.kind}-icon ${args.color && `color="${args.color}"`}></dsa-${
    args.kind
  }-icon> dsa-${args.kind}-icon
  </p>
  <p>
    Inside parent with color: ${args.wrapperColor} & font-size: ${
    args.wrapperFontSize
  }
  </p>
  `;

export const Default = Template.bind({});
Default.storyName = 'Icons';
Default.args = {};
