export const useLogin = () => {
	async function login(
		username: string,
		password: string,
		remember: boolean
	) {
		const sleep = (ms: number) =>
			new Promise((resolve) => setTimeout(resolve, ms));

		console.log(username, password, remember);

		await sleep(3000);

		return true;
	}

	return login;
};
