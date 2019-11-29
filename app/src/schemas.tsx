import { SchemaGraphQL } from './types';

const Schema: SchemaGraphQL<string> = {
	createMess: (mess) => {
		return `
		  mutation {
			createMess(mess: "${mess}") {
				Owner
				ID
				Error
			}
		  }
		`;
	}
}
 
export default Schema;
