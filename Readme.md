Specimen02 is a command-line interface library. It has a simple to use, extendible interface with command line tools to help you with(also just to show off a little). It's main focus is simplicity.

***Total library size ~4kb.***

# Installation

```npm install --save specimen02```

## Example configuration

```
{
	specimen02: {
		test: {
			description: 'prints a message if speciment is installed',
			call: () => (console.log('Specimen is installed...'))
		}
	},
}
````

## How to use?

Specimen02 makes the assumption that config/commands.js has the command definition in place. If not, the commands can be also passed as an object
directly. 

If you would like specimen02 to create a sample command file for you, just run,

```specimen02 install fresh```

You can get more help about ```fresh``` command by writing,

```specimen02 install --help```

##### Whats with the name

I have tought about 3 hours involving some of my friends. One idea was to name it with a name describing *transportation between universes*. But we failed
for now.