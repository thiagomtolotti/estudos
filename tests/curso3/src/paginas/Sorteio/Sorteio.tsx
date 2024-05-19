import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

export const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  return (
    <section>
      <form action="">
        <select name="oarticipanteDaVez" id="oarticipanteDaVez">
          {participantes.map((participante) => (
            <option>{participante}</option>
          ))}
        </select>
      </form>
    </section>
  );
};
