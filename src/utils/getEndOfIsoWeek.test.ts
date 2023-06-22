import { getEndOfIsoWeek } from './getEndOfIsoWeek';

it('test test', async () => {
  const result = getEndOfIsoWeek(new Date());

  expect(result.toLocaleString('en-SE')).toBeFalsy();
});

// TODO: add more tests
