import React, { useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import closeImage from '../../assets/close.svg';
import { Container, RadioButton, TransactionTypeContainer } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'>
        <img src={closeImage} alt="Botão fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='number'
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          placeholder='Valor'
        />

        <TransactionTypeContainer>
          <RadioButton
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImage} alt="Tipo Entrada" />
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImage} alt="Tipo Saída" />
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
