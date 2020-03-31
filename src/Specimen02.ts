#!/usr/bin/env node
import { reduce, mergeDeepWith, concat, hasPath } from 'ramda';

const [, , ...args] = process.argv;

// const carryArg = curry((fn: Function, arg: any) => {
// 	fn(arg);
// 	return arg;
// });
// const carriedLog = carryArg(console.log);
// const logAndRunCommand = pipe(carriedLog, execSync, console.log);

const commandReducer = (accumulatorValue: any, currentValue: any) => {
	if (hasPath(["call"], accumulatorValue)) {
		return mergeDeepWith(concat, accumulatorValue, { args: [currentValue] })
	} else {
		return accumulatorValue[currentValue]
	}
}

export const findNestedCommand = (commandChain: Array<string>, commandsStore: any) => (
	reduce(commandReducer, commandsStore, commandChain)
);

if (process.env.NODE_ENV !== 'test') {
	//@ts-ignore
	Promise.resolve(findNestedCommand(args, {})()).then((result) => {
		console.log(result);
	}).catch((e) => {
		console.error('Error at calling the function.', e);
	});
}