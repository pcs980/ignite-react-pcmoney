import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  onHandleNewTransactionModal: () => void,
}

export function Header({ onHandleNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="pc money logo" />
        <button onClick={onHandleNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
