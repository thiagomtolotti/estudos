import { act, renderHook } from '@testing-library/react';
import { buscaTransacoes } from '../services/transacoes';
import { buscaSaldo } from '../services/saldo';
import useListaTransacoes from './useListaTransacoes';
import useSaldo from './useSaldo';

jest.mock('../services/transacoes');

const mockTransacao = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '22/11/2022',
    mes: 'Novembro',
  },
];

jest.mock('../services/saldo');

const mockSaldo = 300;

describe('hooks/useListaTransacoes', () => {
  test('Deve retornar uma lista de transações e uma função que a atualiza', async () => {
    buscaTransacoes.mockImplementation(() => mockTransacao);

    const { result } = renderHook(() => useListaTransacoes());

    expect(result.current[0]).toEqual([]);

    await act(async () => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(mockTransacao);
  });
});

describe('hooks/useSaldo', () => {
  test('Deve retornar o saldo e uma função para atualizá-lo', async () => {
    buscaSaldo.mockImplementation(() => mockSaldo);

    const { result } = renderHook(() => useSaldo());

    expect(result.current[0]).toEqual(0);

    await act(async () => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(mockSaldo);
  });
});
