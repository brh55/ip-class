import test from 'ava';
import fn from '.';

test('Test error', t => {
	let err = t.throws(() => fn('256.100.2.3'), Error);
	t.is(err.message, 'Not a valid IPv4 address');

    err = t.throws(() => fn(1), Error);
    t.is(err.message, 'Expected a string');

    err = t.throws(() => fn({}), Error);
    t.is(err.message, 'Expected a string')
});

test('Test Class A', t => {
    t.is(fn('0.0.0.0'), 'A');
    t.is(fn('127.255.255.255'), 'A');
});

test('Test Class B', t => {
    t.is(fn('128.0.0.0'), 'B');
    t.is(fn('191.255.255.255'), 'B');
});

test('Test Class C', t => {
    t.is(fn('192.0.0.0'), 'C');
    t.is(fn('223.255.255.255'), 'C');
});

test('Test Class D', t => {
    t.is(fn('224.0.0.0'), 'D');
    t.is(fn('239.255.255.255'), 'D');
});

test('Test Class E', t => {
    t.is(fn('240.0.0.0'), 'E');
    t.is(fn('255.255.255.254'), 'E');
});


