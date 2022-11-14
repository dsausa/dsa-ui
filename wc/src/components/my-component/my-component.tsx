import { Component, Prop, h } from '@stencil/core';
import { maybeLoadFonts } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
  assetsDirs: ['../assets'],
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * `primary` or `secondary` styling
   */
  @Prop() styling = 'primary';

  componentDidLoad() {
    maybeLoadFonts();
  }

  private getText(): string {
    return [this.first, this.middle, this.last].filter(x => x).join(' ');
  }

  // Made this simple function to make readable class lists.
  // For dynamic classes, use an object instead of the classNames function.
  // For example: `<div class={{'error': this.hasError, 'hidden': !this.isOpen}} />
  // MAKE PRIVATE TO AVOID GENERATING STORYBOOK DOCUMENTATION:

  // This is a little silly, but I guess it's what Tailwind craves.
  // I hope we can find a nicer, tw-parsable way to do this.
  private classes = {
    'primary': this.styling == 'primary',
    'secondary': this.styling == 'secondary',
  };

  render() {
    console.log(this.styling);
    return <div class={this.classes}>Hello, World! I'm {this.getText()}</div>;
  }
}
