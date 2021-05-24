import { useEffect } from "react";
import { api } from "../../services/axios";
import { Container } from "./styles";

export function TransactionList() {
  useEffect(() => {
    api.get('transactions')
      .then((response) => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>Moradia</td>
            <td>05/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
