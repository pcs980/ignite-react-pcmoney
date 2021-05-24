import { Summary } from "../Summary";
import { TransactionList } from "../TransactionsList";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionList />
    </Container>
  );
}
