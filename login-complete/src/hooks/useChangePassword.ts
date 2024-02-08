export const useChangePassword = () => {
	async function changePassword(newPasword: string) {
		const sleep = (ms: number) =>
			new Promise((resolve) => setTimeout(resolve, ms));

		console.log(newPasword);

		await sleep(3000);

		return true;
	}

	return changePassword;
};
