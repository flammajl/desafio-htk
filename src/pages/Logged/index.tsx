import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';
import { useToast } from '../../hooks/toast';

import { Header, Container, Plans } from './styles';

const Logged: React.FC = () => {
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
        <h2>Nossos planos</h2>

        <div>
          <Plans>
            <h3>Plano</h3>
            <div>R$ *,**</div>
            <ul>
              <li>Assistencia</li>
              <li>Carro reserva</li>
              <li>Danos a terceiro</li>
              <li>Danos a terceiro</li>
            </ul>
          </Plans>
          <Plans>
            <h3>Plano</h3>
            <div>R$ *,**</div>
            <ul>
              <li>Assistencia</li>
              <li>Carro reserva</li>
              <li>Danos a terceiro</li>
              <li>Danos a terceiro</li>
            </ul>
          </Plans>
          <Plans>
            <h3>Plano</h3>
            <div>R$ *,**</div>
            <ul>
              <li>Assistencia</li>
              <li>Carro reserva</li>
              <li>Danos a terceiro</li>
              <li>Danos a terceiro</li>
            </ul>
          </Plans>
        </div>
      </Container>
    </>
  );
};

export default Logged;
