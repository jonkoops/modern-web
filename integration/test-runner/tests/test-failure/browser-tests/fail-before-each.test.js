import { expect } from '../../../../../node_modules/chai/chai.js';

beforeEach(() => {
  throw new Error('error thrown in beforeEach hook');
});

it('true is true', () => {
  expect(true).to.equal(true);
});

it('true is really true', () => {
  expect(true).to.equal(true);
});
