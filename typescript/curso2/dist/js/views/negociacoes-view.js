export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(negociacoes) {
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
            .map((negociacao) => `<tr>
				  <td>${negociacao.data.toLocaleDateString()}</td>
				  <td>${negociacao.quantidade}</td>
				  <td>${negociacao.valor}</td>
			  </tr>`)
            .join("")}
			</tbody>
		</table>
		`;
    }
    update(negociacoes) {
        this.elemento.innerHTML = this.template(negociacoes);
    }
}
