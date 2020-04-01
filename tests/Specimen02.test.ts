import { findNestedCommand } from '../src/Specimen02';
import { commandsStore } from '../config/specimen02';

describe('relay store', () => {
	test('can find nested command', () => {
		const command = findNestedCommand(['install', 'fresh'], commandsStore);
		expect(command['description']).toBe('installs specimen by creating folders and updates package.json.')
	});
	test('can pass arguments to found command', () => {
		const command = findNestedCommand(['install', 'fresh', 'argument1', 'argument2'], commandsStore);
		expect(command['args'].length).toBe(2);
	});
	test('can print helpful message if found object is not a command', () => {
		const command = findNestedCommand(['install'], commandsStore);
		// TODO
		console.log(command);
	});
});