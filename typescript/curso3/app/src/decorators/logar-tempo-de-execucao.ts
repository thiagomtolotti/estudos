export function logarTempoDeExecucao(emSegundos: boolean = false) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const metodoOriginal = descriptor.value;

		descriptor.value = function (...args: Array<any>) {
			const divisor = emSegundos ? 1000 : 1;
			const unidade = emSegundos ? "segundos" : "milisegundos";
			const t1 = performance.now();

			//Chama o método original
			const retorno = metodoOriginal.apply(this, args);

			const t2 = performance.now();
			console.log(
				`${propertyKey}, tempo de execução: ${
					(t2 - t1) / divisor
				} ${unidade}`
			);

			return retorno;
		};

		return descriptor;
	};
}
