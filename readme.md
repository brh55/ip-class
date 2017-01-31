# ip-class [![Travis](https://img.shields.io/travis/brh55/ip-class.svg?style=flat-square)](https://travis-ci.org/brh55/ip-class) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

> Get the IPv4 address class of an ip address for classful networks

## Install

```
$ npm install --save ip-class
```

## Usage

```js
const ipClass = require('ip-class');

ipClass('127.255.255.255');
//=> 'A'

ipClass('191.255.255.255');
//=> 'B'

ipClass('223.255.255.255');
//=> 'C'

ipClass('239.255.255.255');
//=> 'D'

ipClass('255.255.255.254');
//=> 'E'
```

## API

### ipClass(ip)

*Returns the class of the ip*

#### ip

Type: `string`

A valid IPv4 address.


## License

MIT © [Brandon Him](https://github.com/brh55)
