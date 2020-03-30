"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_adjunct_1 = require("ramda-adjunct");
exports.commandsStore = {
    install: {
        fresh: {
            description: 'installs specimen by creating folders and updates package.json.',
            call: ramda_adjunct_1.noop
        }
    },
};
