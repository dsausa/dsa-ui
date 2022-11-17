[📖 dsausa.github.io/dsa-ui](dsausa.github.io/dsa-ui)

# @dsa-ui

This is a design system built with [Stencil](https://stenciljs.com/), [Tailwind](https://tailwindcss.com/), and [Storybook](https://tailwindcss.com/) for Democratic Socialists of America sites and applications by the DSA National Tech Committee.

It will incorporate branding from [design.dsausa.org](http://design.dsausa.org) and [the mydsa figma](https://www.figma.com/file/1Hty7YjMHXRHPwbESKUBf1/mydsa-public-01).

> _DISCLAIMER: This is an exploratory respository and not yet officially endorsed by the DSA nor the National Tech Committee. While it is public for now, that is subject to change._

## Getting Started

### Quick Tour

This repo currently has a root package and two sibling packages, `./react` and `./wc`.

Each corresponds to a published package: `@dsa-ui/react` for native React components and `@dsa-ui/wc` for web components that can be used in any other framework (or no framework).

>#### `.`

The root! You can run the node scripts listed below from this directory. This allows us to keep our two packages synced.

>#### `./.vs-code`

Contains some settings and extension suggestions helpful for working with this toolset. Feel free to add other tweaks or disregard them if they do not suit your needs.

>#### `./react`

This is a __generated__ native React library. __You should not work in this package or change any files__ unless you are making adjustments to the `package.json` or other non-generated file for publishing purposes.
Any changes to the components should be made in `./wc`.

>#### `./wc`

_This is where the magic happens._ Development, testing, stories, and publishing are controlled from this directory.

>>#### `/src`

Generated types and a static site for development. These can be ignored.

>>>#### `/components`

Each component has its own directory. Each contains a `.tsx` file that contains the component itself as well as tests and stylesheets (which can be ignored in favor of tailwind).

>>#### `/stories`

Story files, which can be simple like `my-component.stories.tsx` (which takes advantage of auto-generation) or complex. Each file can hold multiple stories with different arguments and arrangements to test and doc different states.

### Start Development

```bash
npm run init
npm start
```

- `init` install dependencies in all three packages: root, wc, and react.
- Starts a dev build of web components and watches for changes
- Builds a custom elements manifest that helps Storybook generate helpful docs
- Starts a Storybook server on `http://localhost:6006`

### Build For Production

```bash
npm run build:prod
```

Builds optimized web components and syncs the React library.

### Run Tests

```bash
npm test
```

### Publish a change to NPM

__Patch__ for internal changes, __minor__ for new features, and __major__ for breaking changes. If you're not sure, make it minor. (This breakdown came from Copilot and I am down with it.)

```bash
npm run bump --newversion=patch
```

This will ensure tests pass and then bump versions on all three `package.json`s. In order to publish to NPM and deploy to Github Pages, the corresponding PR should have the label `bump`.

## Creating New Components

Navigate to `./wc/src/components` and create a new directory for your component. The directory name should be the same as the component name. Use the prefix `dsa`; i.e., `dsa-button` or `dsa-card`.

Inside the directory, create a `.tsx` file with the same name as the directory. You can use the demo file, `my-component.tsx`, as a template. Additionally, create a `.spec.ts` file for unit tests, a `.e2e.ts` file for end-to-end tests, and a `.css` file if you need styles beyond what Tailwind provides. Please ensure near-complete test coverage.

### Component Structure

```tsx  


import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsa-component', // HTML tag
  styleUrl: 'dsa-component.css', // styles, if needed
  shadow: true, // set to `true`-- encapsulated DOM and styles
})
export class MyComponent {

  @Prop() name: string; // indicate a public prop (attribute) on the component-- establishes a public API

  private message = "My name is "; // mark an internal prop as private; use `@State()` if you need to trigger a re-render when it changes

  render() { // return JSX, just like React
    return (
      <p>
        {this.message + this.name}
      </p>
    );
  }
}
```

For more information on writing Stencil components, see the [Stencil docs](https://stenciljs.com/docs/my-first-component).

### Adding a Story

You will also need to create a `.stories.tsx` file for Storybook in the `./wc/stories` directory. This file will be used to generate documentation and test the component in different states.

```js
// full, working example of a generated story
import { formatArgs } from './utils/utils';

export default {
  title: 'Example/MyComponent',
  component: 'my-component',
};

const Template = (args) => `<my-component ${formatArgs(args)}></my-component>`;

export const Default = Template.bind({});
```

In many cases, you will only need to change the `title` and `component` variables, and the tag name in the `Template()` function. If your need is more complex, consult the [Storybook documentation](https://storybook.js.org/docs/web-components/writing-stories/introduction).

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
