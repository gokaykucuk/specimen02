#!/usr/bin/env node
import { execSync } from 'child_process';
import { pipe, curry, reduce, path, has, mergeDeepWith, concat, ifElse, hasPath } from 'ramda';
import { noop } from 'ramda-adjunct';
/*
    This might become it's own project. Commands store needs
    to be kept here, and rest of the functinality might
    becine own library.
    TODO: 
        - Find the deepest command you can find
        and pass the rest as arugments to the function!.
        - It might become a simple to use style as 
        it gives you an overview of possible actions instantly.
*/

// Grab provided args.
const [, , ...args] = process.argv;

const carryArg = curry((fn: Function, arg: any) => {
	fn(arg);
	return arg;
});
const carriedLog = carryArg(console.log);
const logAndRunCommand = pipe(carriedLog, execSync, console.log);

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

