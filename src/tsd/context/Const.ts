module tsd {
	'use strict';

	export var Const = {
		ident : 'tsd',
		configFile : 'tsd.json',
		typingsDir : 'typings',
		cacheDir : 'tsd-cache',

		configVersion: 'v4',
		configSchemaFile : 'tsd-v4.json',
		definitelyRepo: 'borisyankov/DefinitelyTyped',
		mainBranch: 'master',

		shaShorten: 6
	 };
	//TODO add deepFreeze for safety
	//proper const
	Object.freeze(Const);
}
