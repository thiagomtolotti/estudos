export const useForgotPassword = () => {
	async function forgotPassword(email: string) {
		const sleep = (ms: number) =>
			new Promise((resolve) => setTimeout(resolve, ms));

		console.log(email);

		await sleep(3000);

		return true;
	}

	return forgotPassword;
};
