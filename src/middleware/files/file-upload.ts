import multiplesUpload from '../../services/image-upload';

const fileUpload = (req, res) => multiplesUpload(req,res);

export default fileUpload;
