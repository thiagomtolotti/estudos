import "./CampoTexto.css";

interface CampoTextoProps {
  placeholder: string;
  label: string;
  aoAlterado: (valor: string) => void;
  obrigatorio?: boolean;
  valor: string;
}

const CampoTexto = ({
  placeholder,
  aoAlterado,
  label,
  valor,
  obrigatorio = false,
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
