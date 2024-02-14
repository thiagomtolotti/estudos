const initialState = {
	currentUser: null,
};

const userReducer = (state = initialState, action) => {
	if (action.type === "users/login") {
		return {
			...state,
			currentUser: action.payload,
		};
	}

	if (action.type === "users/logout") {
		return {
			...state,
			currentUser: null,
		};
	}

	return state;
};

export default userReducer;
