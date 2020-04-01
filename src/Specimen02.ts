#!/usr/bin/env node
import { reduce, has, set, lensPath, append } from 'rambda';
const [, , ...args] = process.argv;
// const carryArg = curry((fn: Function, arg: any) => {
// 	fn(arg);
// 	return arg;
// });
// const carriedLog = carryArg(console.log);
// const logAndRunCommand = pipe(carriedLog, execSync, console.log);

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

if (process.env.NODE_ENV !== 'test') {
	//@ts-ignore
	Promise.resolve(findNestedCommand(args, {})()).then((result) => {
		console.log(result);
	}).catch((e) => {
		console.error('Error at calling the function.', e);
	});
}