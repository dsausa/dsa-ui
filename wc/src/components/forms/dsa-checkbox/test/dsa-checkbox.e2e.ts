import { newE2EPage } from '@stencil/core/testing';

describe('dsa-checkbox', () => {
  it('participates in FormData', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <form>
        <dsa-checkbox checked name="apple">Apple</dsa-checkbox>
        <dsa-checkbox checked name="banana" value="agree">Banana</dsa-checkbox>
        <dsa-checkbox name="cherry">Cherry</dsa-checkbox>
        <dsa-checkbox checked disabled name="durian">Durian</dsa-checkbox>
      </form>`);

    const data = await page.$eval('form', form => {
      const json: any = {};
      new FormData(form).forEach((value, key) => {
        json[key] = value;
      });
      return json;
    });

    expect(data).toEqual({
      apple: 'on',
      banana: 'agree',
    });
  });
});
