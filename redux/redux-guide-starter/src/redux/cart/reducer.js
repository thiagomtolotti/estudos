import CartActionTypes from "./action-types";

const initialState = {
	products: [],
	totalPrice: 0,
};

const removeProductFromList = (list, id) => {
	return list.filter((product) => product.id !== id);
};

const increaseProductQuantity = (list, id) => {
	return list.map((product) =>
		product.id === id
			? { ...product, quantity: product.quantity + 1 }
			: product
	);
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CartActionTypes.ADD_PRODUCT:
			const isProductAlreadyInCart = state.products.some(
				(product) => product.id === action.payload.id
			);

			if (isProductAlreadyInCart) {
				return {
					...state,
					products: increaseProductQuantity(
						state.products,
						action.payload.id
					),
				};
			}

			return {
				...state,
				products: [
					...state.products,
					{ ...action.payload, quantity: 1 },
				],
			};

		case CartActionTypes.REMOVE_PRODUCT:
			return {
				...state,
				products: removeProductFromList(state.products, action.payload),
			};

		case CartActionTypes.INCREASE_PRODUCT:
			return {
				...state,
				products: increaseProductQuantity(
					state.products,
					action.payload
				),
			};

		case CartActionTypes.DECREASE_PRODUCT:
			const numberOfProductInCart = state.products.find(
				(product) => product.id === action.payload
			).quantity;

			if (numberOfProductInCart === 1) {
				return {
					...state,
					products: removeProductFromList(
						state.products,
						action.payload
					),
				};
			}

			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.payload
						? { ...product, quantity: product.quantity - 1 }
						: product
				),
			};

		default:
			return state;
	}
};

export default cartReducer;
