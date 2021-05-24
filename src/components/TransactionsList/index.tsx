import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionList() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((json) => console.log(json))
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
