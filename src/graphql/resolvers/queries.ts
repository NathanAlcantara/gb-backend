import Product from "../../models/Product";
import { paginate } from "./main";

const queries = {
	Query: {
		allProducts: (_, { pagination }) => {
			const query = Product.find().orFail(new Error('Não foi possível encontrar nenhum produto'));

			if (pagination) {
				paginate(query, pagination);
			}

			return query.exec();
		},
		oneProduct: (_, { id }) => {
			return Product.findById(id).exec().then(productDetails => {
				if (!productDetails) {
					throw new Error(`Não foi possível encontrar o produto com o id: ${id}`);
				}

				return productDetails;
			});
		}
	},
};

export default queries;
