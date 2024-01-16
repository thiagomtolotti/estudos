import { useRef } from "react";

const Formulario = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	function handleInput() {
		if (!buttonRef.current || !inputRef.current) return;

		buttonRef.current.disabled = Boolean(inputRef.current?.value);
	}

	return (
		<form action="">
			<input
				type="text"
				placeholder="Insira os nomes dos participantes"
				ref={inputRef}
				onInput={handleInput}
			/>
			<button disabled ref={buttonRef}>
				Adicionar
			</button>
		</form>
	);
};

export default Formulario;
