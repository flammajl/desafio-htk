import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 80px);

  h3 {
    margin-bottom: 200px;
  }

  progress {
    width: 300px;
    margin-bottom: 32px;
  }
`;
