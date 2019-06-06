import aws = require('aws-sdk');
import multer = require('multer');
import multerS3 = require('multer-s3');

import {
	AWS_SECRET_ACCESS_KEY,
	AWS_ACCESS_KEY,
	AWS_REGION,
	AWS_BUCKET_PHOTOS
} from './../core/constants';

aws.config.update({
	secretAccessKey: AWS_SECRET_ACCESS_KEY,
	accessKeyId: AWS_ACCESS_KEY,
	region: AWS_REGION
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
	}
};

const upload = multer({
	fileFilter,
	storage: multerS3({
		acl: 'public-read',
		s3,
		bucket: AWS_BUCKET_PHOTOS,
		metadata: (req, file, cb) => {
			cb(null, {fieldName: 'TESTING_METADATA'});
		},
		key: (req, file, cb) => {
			cb(null, Date.now().toString());
		}
	})
}).array('images');

const multiplesUpload = (req, res) => {
	upload(req, res, (err) => {
		if (err) {
			return res.status(422).send({errors: [{title: 'Images Upload Error', detail: err.message}]});
		}

		if (req.files) {
			return res.json({'imagesUrl': req.files.map((file) => file.location)});
		} else {
			return res.status(204);
		}
	});
};

export default multiplesUpload;
