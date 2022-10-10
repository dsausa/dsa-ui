import { Component, Prop, h } from '@stencil/core';
import { formatClasses } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
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

  /** @internal */
  private getText(): string {
    return [this.first, this.middle, this.last].filter(x => x).join(' ');
  }

  // Made this simple function to make readable class lists.
  // For dynamic classes, use an object instead of the classNames function.
  // For example: `<div class={{'error': this.hasError, 'hidden': !this.isOpen}} />
  // USE THIS DECORATOR TO AVOID GENERATING STORYBOOK CONTROLS:
  /** internal */
  private classes = formatClasses(
    'bg-rose-500',
    'p-6',
    'rounded-md',
    'flex',
    'justify-center',
    'font-sans',
    'text-white',
  );

  /** @internal */
  render() {
    return <div class={this.classes}>Hello, World! I'm {this.getText()}</div>;
  }
}
