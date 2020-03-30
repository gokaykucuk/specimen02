import { commandsStore } from '../config/commands';
import { merge } from 'ramda';


const testCommandStore = {
	test: {

	}
}
export const combinedCommandStore = () => merge(commandsStore, testCommandStore)