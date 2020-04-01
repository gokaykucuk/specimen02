import { commandsStore } from '../config/specimen02';
import { merge } from 'ramda';


const testCommandStore = {
	test: {

	}
}
export const combinedCommandStore = () => merge(commandsStore, testCommandStore)