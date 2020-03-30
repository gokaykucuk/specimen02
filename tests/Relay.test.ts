import { findNestedCommand } from '../src/Relay';
import { commandsStore } from '../config/commands';

import { fromPairs } from 'ramda';
describe('relay store', () => {
	test('can find nested command', () => {
		const command = findNestedCommand(['install', 'fresh'], commandsStore);
		expect(command['description']).toBe('installs specimen by creating folders and updates package.json.')
	});
	test('can pass arguments to found command', () => {
		const command = findNestedCommand(['install', 'fresh', 'argument1', 'argument2'], commandsStore);
		expect(command['args'].length).toBe(2);
	});
});
