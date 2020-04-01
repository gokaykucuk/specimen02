#!/usr/bin/env node
import { reduce, has, set, lensPath, append } from 'rambda';
import * as fs from 'fs';
const [, , ...args] = process.argv;

const commandReducer = (accumulatorValue: any, currentValue: any) => {
	const argsLens = lensPath(['args'])
	if (has("call", accumulatorValue)) {
		const combinedArgs = append(currentValue, accumulatorValue.args || []);
		return set(argsLens, combinedArgs, accumulatorValue)
	} else {
		return accumulatorValue[currentValue]
	}
}

export const findNestedCommand = (commandChain: Array<string>, commandsStore: any) => (
	reduce(commandReducer, commandsStore, commandChain)
);

const specimentConfigPath = process.env.SPECIMEN_CONFIG_PATH || './config/specimen02.ts';
if (process.env.NODE_ENV !== 'test') {
	const specimenConfig = JSON.parse(fs.readFileSync(specimentConfigPath).toString());
	Promise.resolve(findNestedCommand(args, specimenConfig)()).then((result) => {
		console.log(result);
	}).catch((e) => {
		console.error('Error at calling the function.', e);
	});
}