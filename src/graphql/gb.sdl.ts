const schemaDefinitionLanguage = `
	type Query{
		allProducts(pagination:PageableInput) : [Product]
		countAllProducts: Int
		oneProduct(id:ID!) : Product
	}
	
	type Mutation{
		addProduct(product:ProductInput!) : Product
		updateProduct(id:ID!, product:ProductInput!) : Product
		removeProduct(id:ID!) : Product
	}
		
	### Input Objects -----------------------------------------
	
	input PageableInput{
		search : String
		page : Int = 0
		size : Int = 10
		sort : Int = -1
		order : String = "index"
	}
	
	input ProductInput{
		code : Int!
		name : String!
		productType : ProductType!
		photosURL : [String!]!
		actualPrice : Float!
		exPrice : Float
		paymentType : [PaymentType!]!
		numberOfParcels : Int = 1
		valueOfParcel : Float!
		colors : [ColorType!]!
		sizes : [SizeType]
	}
	
	### Entities ----------------------------------------------
	
	type Product{
		"Identificador único do produto"
		_id : ID
		"Código do produto"
		code : Int!
		"Nome do produto"
		name : String!
		"Tipo do produto"
		productType : ProductType!
		"Urls das imagens do produto"
		photosURL : [String!]!
		"Preço atual do produto"
		actualPrice : Float!
		"Preço anterior do produto"
		exPrice : Float
		"Tipos de pagamentos do produto"
		paymentType : [PaymentType!]!
		"Número de parcelas do produto"
		numberOfParcels : Int
		"Valor de cada parcela do produto"
		valueOfParcel : Float!
		"Cores do produto"
		colors : [ColorType!]!
		"Tamanho do produto"
		sizes : [SizeType]
		"Campo de busca do produto (code - name)"
		index: String
		"Data de criação do produto"
		createDate : Date
		"Data de atualização do produto"
		updatedDate : Date
	}
	
	### Scalar Objects node -----------------------------------
	
	scalar Date
	
	### Enums -------------------------------------------------
	
	enum ProductType {
		DRESS,
		SET,
		SHIRT,
		PANT,
		SHORT,
		SKIRT,
		BIKINI,
		CROPPED,
		ACCESSORIES
	}
	
	enum PaymentType {
		IN_CASH,
		FREE_INTEREST,
		WITH_INTEREST
	}
	
	enum ColorType {
		WHITE,
		BLACK,
		GRAY,
		BLUE,
		RED,
		GREEN,
		YELLOW
	}
	
	enum SizeType {
		PP,
		P,
		M,
		G,
		GG,
		XG
	}
`;

export default schemaDefinitionLanguage;
