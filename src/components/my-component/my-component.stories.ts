import { formatArgs } from "../../utils/utils";

export default {
    title: 'Example/MyComponent',
    argTypes: {
        first: { 
            control: 'text',
            defaultValue: 'Testward'
        },
        middle: { 
            control: 'text',
            defaultValue: 'Testopher'
        },
        last: { 
            control: 'text',
            defaultValue: 'Testmond'
        },
    },
};

const Template = (args) => `<my-component ${formatArgs(args)}></my-component>`;

export const Default = Template.bind({});
