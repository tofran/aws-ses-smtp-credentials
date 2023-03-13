import { getSESSmtpPassword } from '.';

test('getSESSmtpPassword', () => {
  expect(
    getSESSmtpPassword(
        'dhSgJJyAs+2z19oLOVkwBrE6GkdNQD5fL5Dou5Tb',
        'eu-central-1'
    )
  ).toBe('BK0hyoUp3vjB+NdwhSiUpkA9oA84fNaqhEKrXZ5PkcX2');
});