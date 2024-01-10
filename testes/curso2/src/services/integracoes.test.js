import api from './api';
import { atualizaSaldo, buscaSaldo } from './saldo';
import { buscaTransacoes } from './transacoes';

jest.mock('./api');

const mockTransacao = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '22/11/2022',
    mes: 'Novembro',
  },
];

const mockSaldo = {
  valor: 200,
};

const mockRequisicao = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: retorno });
    }, 200);
  });
};

const mockRequisicaoErro = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

const mockRequisicaoSaldo = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: retorno });
    }, 200);
  });
};

const mockRequisicaoSaldoErro = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

const mockPostSaldo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
      });
    }, 200);
  });
};

describe('Requisições para a API', () => {
  beforeEach(() => {
    api.get.mockClear();
  });

  describe('Lista de transações', () => {
    test('Deve retornar uma lista de transações', async () => {
      api.get.mockImplementation(() => mockRequisicao(mockTransacao));

      const transacoes = await buscaTransacoes();

      expect(transacoes).toEqual(mockTransacao);
      expect(api.get).toHaveBeenCalledWith('/transacoes');
    });

    test('Deve retornar uma lista vazia quando a requisição falhar', async () => {
      api.get.mockImplementation(() => mockRequisicaoErro());

      const transacoes = await buscaTransacoes();

      expect(transacoes).toEqual([]);
      expect(api.get).toHaveBeenCalledWith('/transacoes');
    });
  });

  describe('Saldo', () => {
    test('Deve retornar o saldo', async () => {
      api.get.mockImplementation(() => mockRequisicaoSaldo(mockSaldo));

      const saldo = await buscaSaldo();

      expect(saldo).toEqual(mockSaldo.valor);
      expect(api.get).toHaveBeenCalledWith('/saldo');
      expect(api.get).toHaveBeenCalledTimes(1);
    });

    test('Deve retornar o saldo "null" quando a requisição falhar', async () => {
      api.get.mockImplementation(() => mockRequisicaoSaldoErro());

      const saldo = await buscaSaldo();

      expect(saldo).toEqual(null);
      expect(api.get).toHaveBeenCalledWith('/saldo');
      expect(api.get).toHaveBeenCalledTimes(1);
    });

    test('atualizaSaldo() deve chamar console.log() com o status correto', async () => {
      const mockConsoleLog = jest.spyOn(console, 'log');
      const mockRequisicaoPut = jest.fn().mockResolvedValue({ status: 200 });

      api.put.mockImplementation((url, data) => mockRequisicaoPut(url, data));

      await atualizaSaldo(1000);

      expect(mockRequisicaoPut).toHaveBeenCalledWith('/saldo', { valor: 1000 });
      expect(mockConsoleLog).toHaveBeenCalledWith(200);
    });

    test('deve jogar um erro', async () => {
      expect(atualizaSaldo(1000)).rejects.toThrow();
    });
  });
});
