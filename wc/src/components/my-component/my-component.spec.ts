import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component />',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <btn class="btn">
            Hello, World! I'm
          </btn>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
    <my-component first="Stencil" last="JS" middle="'Don't call me a framework'">
        <mock:shadow-root>
          <btn class="btn">
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </btn>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
