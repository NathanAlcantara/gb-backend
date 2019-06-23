import Product from "../../models/Product";

const mutations = {
	Mutation: {
		addProduct: (_, { product }) => {
			product.index = `${product.code} - ${product.name.toLowerCase()}`;
			return new Product(product).save().then(newProduct => {
				if (!newProduct) {
					throw new Error('Não foi possível salvar o produto');
				}
				return newProduct;
			});
		},
		updateProduct: (_, { id, product }) => {
			return Product.findByIdAndUpdate(
				id,
				product
			).exec().then(updateProduct => {
				if (!updateProduct) {
					throw new Error(`Não foi possível atualizar o produto com o id ${id}`);
				}
				return updateProduct;
			});
		},
		removeProduct: (_, { id }) => {
			return Product.findByIdAndDelete(id).exec().then(remProduct => {
				if (!remProduct) {
					throw new Error(`Não foi possível excluir o produto com o id ${id}`);
				}
				return remProduct;
			});
		}
	}
};

export default mutations;
