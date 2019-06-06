import express from 'express';

import fileUploadFn from './middleware/files/file-upload';
import fileRemoveFn from './middleware/files/file-remove';

const router = express.Router();


router.get('/', (req, res) => {
	res.json({ 'message': 'Fala seu feio' });
});

router.post('/images-upload', fileUploadFn);
router.post('/images-delete', fileRemoveFn);

export default router;
