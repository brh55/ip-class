'use strict';
const validate = require('validate-ip');
// Reference: https://en.wikipedia.org/wiki/IPv4_subnetting_reference

module.exports = ip => {
	if (!validate(ip)) {
		throw new Error('Not a valid IPv4 address');
	}

	const firstOctet = parseInt(ip.match(/\d{1,3}(?=\.)/)[0], 10);

	if (firstOctet < 128) {
		return 'A';
	}
	if (firstOctet > 127 && firstOctet < 192) {
		return 'B';
	}
	if (firstOctet > 191 && firstOctet < 224) {
		return 'C';
	}
	if (firstOctet > 223 && firstOctet < 240) {
		return 'D';
	}
	if (firstOctet > 239 && firstOctet < 256) {
		return 'E';
	}

	// Note: Should never get here because of validation check
	return false;
};
