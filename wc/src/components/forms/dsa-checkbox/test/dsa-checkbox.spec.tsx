import {newSpecPage, SpecPage} from '@stencil/core/testing';
import {DsaCheckbox} from '../dsa-checkbox';

describe('dsa-checkbox', () => {
  let page: SpecPage;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [DsaCheckbox],
      html: `<dsa-checkbox>Remember me</dsa-checkbox>`,
    });
  });

  it('syncs checked property with its <input> element', async () => {
    const component = page.body.querySelector('dsa-checkbox');
    const input = component.shadowRoot.querySelector('input');

    // component -> input
    for (const value of [true, false]) {
      component.checked = value;
      await page.waitForChanges();
      expect(input.checked).toBe(value);
    }

    // input -> component
    for (const _ of [true, false]) {
      // setting input.checked doesn't fire change
      input.click();
      await page.waitForChanges();
      expect(component.checked).toBe(input.checked);
    }
  });

  it('syncs disabled property with its <input> element', async () => {
    const component = page.body.querySelector("dsa-checkbox");
    const input = component.shadowRoot.querySelector('input');

    // component -> input
    for (const value of [true, false]) {
      component.disabled = value;
      await page.waitForChanges();
      expect(input.disabled).toBe(value);
    }
  });

  it("fires onchange event", async () => {
    const component = page.body.querySelector('dsa-checkbox');

    const fn = jest.fn();
    component.addEventListener("_change", fn);

    component.checked = !component.checked;
    expect(fn).toHaveBeenCalledTimes(1);
  });
});