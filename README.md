# gh-user-pushes

[![NPM version](https://img.shields.io/npm/v/gh-user-pushes.svg)](https://www.npmjs.com/package/gh-user-pushes)
[![Build Status](https://travis-ci.org/shinnn/gh-user-pushes.svg?branch=master)](https://travis-ci.org/shinnn/gh-user-pushes)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-user-pushes.svg)](https://coveralls.io/github/shinnn/is-gist-starred?branch=master)
[![Dependency Status](https://david-dm.org/shinnn/gh-user-pushes.svg)](https://david-dm.org/shinnn/gh-user-pushes)
[![devDependency Status](https://david-dm.org/shinnn/gh-user-pushes/dev-status.svg)](https://david-dm.org/shinnn/gh-user-pushes#info=devDependencies)

Get the list of recent [pushes](https://git-scm.com/docs/git-push) to [Github](https://github.com/) [repositories](https://help.github.com/articles/github-glossary/#repository) by a user

```javascript
const ghUserPushes = require('gh-user-pushes');

ghUserPushes('shinnn', pushEvents => console.log(pushEvents));
```

```javascript
[
  {
    id: '3410030270',
    type: 'PushEvent',
    actor: {
      id: 1131567,
      login: 'shinnn',
      gravatar_id: '',
      url: 'https://api.github.com/users/shinnn',
      avatar_url: 'https://avatars.githubusercontent.com/u/1131567?'
    },
    repo: {
      id: 24991563,
      name: 'shinnn/read-json-sync',
      url: 'https://api.github.com/repos/shinnn/read-json-sync'
    },
    payload: {
      push_id: 890833539,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '8c8359c6287e5a770ddbc0fee2a234e18388d2b1',
      before: '29847966fe98fa450e865ff9fe92096ca1f45fe0',
      commits: [
        {
          sha: '8c8359c6287e5a770ddbc0fee2a234e18388d2b1',
          author: {
            email: 'snnskwtnb@gmail.com',
            name: 'Shinnosuke Watanabe'
          },
          message: 'use Node v5.x on AppVeyor',
          distinct: true,
          url: 'https://api.github.com/repos/shinnn/read-json-sync/commits/8c8359c6287e5a770ddbc0fee2a234e18388d2b1'
        }
      ]
    },
    public: true,
    created_at: '2015-12-04T18:16:39Z'
  },
  // ...
]
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-user-pushes
```

## API

```javascript
const ghUserEvents = require('gh-user-pushes');
```

### ghUserPushes(*username* [, *options*])

*username*: `String` (a Github username, for example [https://github.com/shinnn](https://github.com/shinnn) → `'shinnn'`)  
*options*: `Object` ([gh-user-events](https://github.com/shinnn/gh-user-events#api) options)  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor) instance

It has almost the same API as [gh-user-events](https://github.com/shinnn/gh-user-events)'s, except that it only gets [`PushEvent`](https://developer.github.com/v3/activity/events/types/#pushevent) items.

## License

Copyright (c) 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
