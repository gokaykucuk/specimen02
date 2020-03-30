#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var ramda_1 = require("ramda");
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
var _a = process.argv, args = _a.slice(2);
var carryArg = ramda_1.curry(function (fn, arg) {
    fn(arg);
    return arg;
});
var carriedLog = carryArg(console.log);
var logAndRunCommand = ramda_1.pipe(carriedLog, child_process_1.execSync, console.log);
var commandReducer = function (accumulatorValue, currentValue) {
    if (ramda_1.hasPath(["call"], accumulatorValue)) {
        return ramda_1.mergeDeepWith(ramda_1.concat, accumulatorValue, { args: [currentValue] });
    }
    else {
        return accumulatorValue[currentValue];
    }
};
exports.findNestedCommand = function (commandChain, commandsStore) { return (ramda_1.reduce(commandReducer, commandsStore, commandChain)); };
if (process.env.NODE_ENV !== 'test') {
    //@ts-ignore
    Promise.resolve(exports.findNestedCommand(args, {})()).then(function (result) {
        console.log(result);
    }).catch(function (e) {
        console.error('Error at calling the function.', e);
    });
}
