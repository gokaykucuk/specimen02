# 🔗 Specimen02


Specimen02 is a command-line interface library. It has a simple to use, extendible interface with command line tools to help you with(also just to show off a little). It's main focus is simplicity.

***Builds should be around ~1 kb.*** Anything more will introduce a refactoring round where it will be lowered back to ~1 kb.

### Name
The idea was to name it with a word describing *transportation between universes*. But we failed for now, so it's specimen02 until someone comes up with a better name.

## 🛠 Installation

Install it and save it to your dependencies.

```npm install --save specimen02```

### Example configuration

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

## 💻 Usage

Specimen02 makes the assumption that config/commands.js has the command definition in place. If not, the commands can be also passed as an object directly. 

If you would like specimen02 to create a sample command file for you, just run,

```specimen02 install fresh```

You can get more help about ```fresh``` command by writing,

```specimen02 install --help```

## 👨‍💻 Development
After checking out the repo, run ```npm install``` to install dependencies. Then, run ```npm test``` to run the tests. 

To install this gem onto your local machine, run ```npm link```.

## 🤲 Contributing
There are multiple areas in this repo that can be improved or use some refactoring(there's a lot to be refactored in fact!). For that reason, bug reports and pull requests are welcome! This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the code of conduct.

## 🔖 License
The library is available as open-source under the terms of the MIT License.

## ❤️ Code of Conduct
Just act like someone who you would like to hang around. That'll do it.