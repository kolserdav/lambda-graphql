import * as AWS from 'aws-sdk';
var s3 = new AWS.S3();

type CM = {
	Owner: string
        ID: string
        Error: boolean
}

type Variables = {
	mess: string
}

interface Args {
	mess: string
}

export default class CreateMess {

	args: Args;

	constructor(args) {
		this.args = args;
	}

	async start() {
		let result: CM = {
			Owner: '',
			ID: '',
			Error: false
		};
		const resProm: CM = await new Promise((resolve) => {
				s3.getBucketAcl({Bucket: this.args.mess}, (err, data) => {
				if (data) {
					result.Owner = data.Owner.DisplayName;
					result.ID = data.Owner.ID;
				}
				else {
					console.log(err)
					result.Owner = null;
					result.ID = null;
					result.Error = true;
				}
				resolve(result);
			})
		});
		return resProm;
	}

}
