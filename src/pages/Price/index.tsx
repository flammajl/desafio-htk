import React, { useCallback } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';
import { Header } from '../Logged/styles';
import { useToast } from '../../hooks/toast';
import { Container } from './styles';

const Price: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const handleLogOut = useCallback(async () => {
    await auth().signOut();
    history.push('/');
    addToast({
      title: 'Usuário deslogado.',
    });
  }, [history, addToast]);

  return (
    <>
      <Header>
        <div>
          <Link to="/cliente">Faça aqui sua cotação</Link>
          <div>
            <ul>
              <li>
                <Link to="/cliente/cotacoes">Minhas Cotações</Link>
              </li>
              <li>
                <Link to="/cliente/solicitar">Solicitar Cotação</Link>
              </li>
              <li>
                <Link onClick={handleLogOut} to="/">
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Header>

      <Container>
        <h3>Selecione o documento do seu veículo</h3>
        <progress style={{ appearance: 'none' }} value="0" max="100">
          0%
        </progress>
        <input name="file" type="file" />
      </Container>
    </>
  );
};

export default Price;
