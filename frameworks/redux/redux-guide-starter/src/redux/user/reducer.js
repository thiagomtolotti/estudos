import UserActionTypes from "./action-types";

const initialState = {
	currentUser: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case UserActionTypes.login: {
			return {
				...state,
				currentUser: action.payload,
			};
		}
		case UserActionTypes.logout: {
			return {
				...state,
				currentUser: null,
			};
		}

		default: {
			return state;
		}
	}
};

export default userReducer;
