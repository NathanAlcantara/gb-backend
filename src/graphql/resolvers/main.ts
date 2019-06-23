import queries from "./queries";
import mutations from "./mutations";

export function paginate(query, pagination) {
	const { search, page, size, sort, order } = pagination;

	if (search) {
		query.where({ index: { $regex: search, $options: "i" } });
	}
	query.sort((sort > 0 ? "" : "-") + order).skip(page * size).limit(size);
}

const resolvers = {
	...queries,
	...mutations
};

export default resolvers;
