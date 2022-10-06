import { formatArgs } from './utils';

describe('formatArgs', () => {
  it('returns args compatible with html literal', () => {
    expect(formatArgs({ first: 'first!', middle: 'middle!', last: 'last!', age: 92 })).toEqual('first="first!" middle="middle!" last="last!" age="92"');
  });
});
