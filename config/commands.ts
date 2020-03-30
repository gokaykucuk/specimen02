import { noop } from 'ramda-adjunct';

export const commandsStore = {
	install: {
		fresh: {
			description: 'installs specimen by creating folders and updates package.json.',
			call: noop
		}
	},
};