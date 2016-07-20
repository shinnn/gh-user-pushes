'use strong';

const ghUserPushes = require('.');
const test = require('tape');

process.env.GITHUB_TOKEN = '';

test('ghUserPushes()', t => {
  t.plan(3);

  t.strictEqual(ghUserPushes.name, 'ghUserPushes', 'should have a function name.');

  ghUserPushes('homu', {token: process.env.TOKEN_FOR_TEST}).then(pushes => {
    t.deepEqual(
      pushes.map(event => event.type),
      new Array(pushes.length).fill('PushEvent'),
      'should get only push events by a user.'
    );
  }).catch(t.fail);

  ghUserPushes('vvvvv').then(pushes => {
    t.deepEqual(
      pushes,
      [],
      'should be resolved with an empty array when the account doesn\'t push commits recently.'
    );
  }).catch(t.fail);
});
