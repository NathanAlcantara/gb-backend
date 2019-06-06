import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
	id: String,
	code: Number,
	name: String,
	productType: String,
	photosURL: Array,
	actualPrice: String,
	exPrice: String,
	paymentType: Array,
	numberOfParcels: Number,
	valueOfParcel: Number,
	colors: Array,
	sizes: Array,
	updatedDate: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
