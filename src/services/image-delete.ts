import aws = require('aws-sdk');
import {
	AWS_SECRET_ACCESS_KEY,
	AWS_ACCESS_KEY,
	AWS_REGION,
	AWS_BUCKET_PHOTOS
} from '../core/constants';

aws.config.update({
	secretAccessKey: AWS_SECRET_ACCESS_KEY,
	accessKeyId: AWS_ACCESS_KEY,
	region: AWS_REGION
});

const s3 = new aws.S3();

const deleteObj = (req, res) => {
	const items = req.body.keys;
	const params = {Bucket: AWS_BUCKET_PHOTOS, Delete: {Objects: items, Quiet: false}};
	s3.deleteObjects(params, (err, data) => {
		if (err) {
			res.send(err);
		}
		res.send(data);
	});
};

export default deleteObj;
