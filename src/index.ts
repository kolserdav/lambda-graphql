import * as dotenv from 'dotenv';
import graphQlHandler from './graphql';
import { Source, Location } from 'graphql';
dotenv.config();

const DEV: boolean = process.env.ENV === 'dev';
const PORT: string = process.env.PORT;


if (DEV) {
	const http= require('http');
	const handler = async (req, res) => {
		let source: Source = new Source('');
		await req.on('data', (chunk) => {
			console.log("\n" + chunk.toString())
       			source.body = JSON.parse(chunk.toString()).query;	
		});
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Origin', '*');
		if (req.method === 'OPTIONS') {
			res.statusCode = 204;
			res.end();
		}
		else {
			const cb = (err, data) => {
				res.end(JSON.stringify(data));
			}
			graphQlHandler(source, cb);
		}
		
	}
	const server = http.createServer(handler);
	server.listen(PORT, () => {
		console.log(`Server listen at port: ${PORT}!`);
	});
}
else {
	exports.handler = (event, context, callback) => {
		let source: Source = new Source('');
		source.body = event.query;
		const cb = (err, data) => {
			callback(err, data);
		}
		graphQlHandler(source, cb);
	}
}
