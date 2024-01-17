import { FormEvent, useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";

const Formulario = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [nome, setNome] = useState("");

	const addParticipante = useAdicionarParticipante();
	const mensagemDeErro = useMensagemDeErro();

	function handleSubmit(ev: FormEvent) {
		if (!inputRef.current) return;
		ev.preventDefault();

		addParticipante(nome);

		setNome("");
		inputRef.current.value = "";
		inputRef.current.focus();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Insira os nomes dos participantes"
				ref={inputRef}
				onChange={(ev) => setNome(ev.target.value)}
			/>
			<button disabled={!nome}>Adicionar</button>
			{mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
		</form>
	);
};

export default Formulario;
