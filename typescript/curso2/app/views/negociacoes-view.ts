import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  template(negociacoes: Negociacoes): string {
    return `
		<table class="table table-hover table-bordered">
			<thead>
				<tr>
					<th>DATA</th>
					<th>QUANTIDADE</th>
					<th>VALOR</th>
				</tr>
			</thead>
			<tbody>
				${negociacoes
          .lista()
          .map(
            (negociacao) =>
              `<tr>
				  <td>${negociacao.data.toLocaleDateString()}</td>
				  <td>${negociacao.quantidade}</td>
				  <td>${negociacao.valor}</td>
			  </tr>`
          )
          .join("")}
			</tbody>
		</table>
		`;
  }
}
