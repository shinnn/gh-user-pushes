/*!
 * gh-user-pushes | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-user-pushes
*/
'use strict';

const arrFilter = require('arr-filter');
const ghUserEvents = require('gh-user-events');

function filterPushes(event) {
  return event.type === 'PushEvent';
}

function excludeNonPushEvents(events) {
  return Promise.resolve(arrFilter(events, filterPushes));
}

module.exports = function ghUserPushes(user, options) {
  options = options || {};
  options.headers = Object.assign({
    'user-agent': 'https://github.com/shinnn/github-user-push-events'
  }, options.headers);

  return ghUserEvents(user, options).then(excludeNonPushEvents);
};
