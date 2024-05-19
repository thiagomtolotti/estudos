import UserActionTypes from "./action-types";

export const loginUser = (payload) => ({
	type: UserActionTypes.login,
	payload: payload,
});

export const logoutUser = () => ({
	type: UserActionTypes.logout,
});
