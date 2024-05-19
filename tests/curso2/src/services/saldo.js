import api from './api';

export async function buscaSaldo() {
  try {
    const resp = await api.get('/saldo');
    return resp.data.valor;
  } catch (err) {
    return null;
  }
}

export async function atualizaSaldo(novoSaldo) {
  try {
    const resp = await api.put('/saldo', { valor: novoSaldo });
    console.log(resp.status);
  } catch (err) {
    throw new Error(err);
  }
}
