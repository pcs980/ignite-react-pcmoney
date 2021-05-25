import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  created_at: string;
}

export function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then((response) => setTransactions(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.title}</td>
                <td className={t.type}>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(t.amount)
                  }
                </td>
                <td>{t.category}</td>
                <td>
                  {
                    new Intl.DateTimeFormat('pt-BR').format(new Date(t.created_at))
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
}
