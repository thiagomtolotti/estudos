export const selectProductsCount = (rootReducer) => {
	return rootReducer.cartReducer.products.length;
};

export const selectProductsTotalPrice = (rootReducer) => {
	return rootReducer.cartReducer.products.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);
};
