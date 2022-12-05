import { Component, Prop, h } from '@stencil/core';

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
   * `primary` or `secondary` variation
   */
  @Prop() variation = 'primary';

  private getText(): string {
    return [this.first, this.middle, this.last].filter(x => x).join(' ');
  }

  // Made this simple function to make readable class lists.
  // For dynamic classes, use an object instead of the classNames function.
  // For example: `<div class={{'error': this.hasError, 'hidden': !this.isOpen}} />
  // MAKE PRIVATE TO AVOID GENERATING STORYBOOK DOCUMENTATION:

  render() {
    console.log(this.variation);
    return <div class={this.variation}>Hello, World! I'm {this.getText()}</div>;
  }
}
