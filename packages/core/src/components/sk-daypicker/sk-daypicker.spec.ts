import { newSpecPage } from '@stencil/core/testing';
import { DayPickerComponent } from './sk-daypicker';

describe('daypicker-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DayPickerComponent],
      html: '<daypicker-component></daypicker-component>',
    });
    expect(root).toEqualHtml(`
      <daypicker-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </daypicker-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [DayPickerComponent],
      html: `<daypicker-component first="Stencil" last="'Don't call me a framework' JS"></daypicker-component>`,
    });
    expect(root).toEqualHtml(`
      <daypicker-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </daypicker-component>
    `);
  });
});
