import {
	graphql,
	buildSchema,
} from 'graphql';

import CreateMess from './components/createMess';


var schema = buildSchema(`
	type Result {
		Owner: String
		ID: String
		Error: Boolean
	}
	type Obj {
		result: Result
	}
	type Query {
		hello(id: Int): String
	}
	type Mutation {
		createMess(mess: String): Result
	}
`);

var root = {
	hello: (args) => {
		return 'Hello world!' + args.id;
	},
	createMess: (args) => {
		const CMI = new CreateMess(args);
		return CMI.start();
	}
};
const graphQLHandler = (query, callback) => {
	graphql(schema, query, root).then(result => {
		callback(null, result);
	});
}

export default graphQLHandler;
