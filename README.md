# Require graphqls
> Allows import of graphqls files as string

Enables import of graphqls files, useful with [graphql-tools](https://github.com/apollographql/graphql-tools) .

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
yarn add require-graphqls
```
Then at start of the program add:
```javascript
require('require-graphqls')
```

When you will need to read a .graphqls file, just require it:
```javascript
const schema = require('./schema.graphqls')
```

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Tests

Execute test using:

```shell
yarn test
```

## License

This is an open source project under [MIT License](http://opensource.org/licenses/MIT)，you can `fork` and rebuild for your own team.  

## Contribution
 
If you got `Bugs` or `feedbacks`，please make [Issues](https://github.com/industrial-cloud/require-graphqls/issues) or send [Pull Request](https://github.com/industrial-cloud/require-graphqls/pulls), thanks :)