import mongoose from 'mongoose';
import { ColorType, PaymentType, ProductType, SizeType } from "../core/enums";

const ProductSchema = new mongoose.Schema({
	id: mongoose.Schema.Types.ObjectId,
	code: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	productType: {
		type: ProductType,
		required: true
	},
	photosURL: {
		type: Array,
		of: String,
		required: true
	},
	actualPrice: {
		type: String,
		required: true
	},
	exPrice: String,
	paymentType: {
		type: Array,
		of: PaymentType,
		required: true
	},
	numberOfParcels: Number,
	valueOfParcel: {
		type: Number,
		required: true
	},
	colors: {
		type: Array,
		of: ColorType,
		required: true
	},
	sizes: {
		type: Array,
		of: SizeType
	},
	index: String,
	createDate: { type: Date, default: Date.now },
	updatedDate: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
