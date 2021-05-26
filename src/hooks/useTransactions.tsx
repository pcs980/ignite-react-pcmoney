import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/axios';

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  created_at: string;
}

type TransactionDTO = Omit<Transaction, 'id' | 'created_at'>;
// type TransactionDTO = Pick<Transaction, 'title' | 'type' | 'amount' | 'category'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionDTO) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);

  async function createTransaction(transaction: TransactionDTO): Promise<void> {
    await api.post('/transactions', transaction)
      .then((response) => setTransactions([...transactions, response.data]))
      .catch((error) => console.error(error));
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
