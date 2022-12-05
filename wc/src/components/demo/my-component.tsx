import { Component, Prop, h } from '@stencil/core';

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

  /**
   * `primary` or `secondary` variation
   */
  @Prop() variation = 'primary';

  private getText(): string {
    return [this.first, this.middle, this.last].filter(x => x).join(' ');
  }

  render() {
    console.log(this.variation);
    return <div class={this.variation}>Hello, World! I'm {this.getText()}</div>;
  }
}
