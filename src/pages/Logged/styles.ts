import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  background: #17222d;
  padding: 16px 0;

  > div {
    display: flex;
    max-width: 1080px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    > a {
      color: #f4ede8;
      text-decoration: none;
      font-size: 36px;
    }

    ul {
      list-style: none;
      display: flex;

      li {
        & + li {
          margin-left: 24px;
        }
      }

      a {
        text-decoration: none;
        display: block;
        padding: 8px;
        color: #f4ede8;
      }
    }
  }
`;

export const Container = styled.section`
  max-width: 1080px;
  margin: 0 auto;

  h2 {
    text-align: center;
    padding-top: 42px;
    font-size: 2em;
    color: #f4ede8;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Plans = styled.div`
  background: #f4ede8;
  width: 18em;
  display: inline-block;
  margin: 10em 0 0 1.4em;
  padding-bottom: 2em;
  color: #17222d;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  &:hover h3 {
    background: ${shade(0.1, '#fff')};
  }

  h3 {
    font-size: 1.8em;
    background: $cor-padrao;
    text-align: center;
    height: 2em;
    padding-top: 0.6em;
    margin-top: 0;
    background: #f4ede8;
  }

  div {
    text-align: center;
    font-size: 2.75em;
    padding: 1.2em 0;
  }

  ul {
    padding-left: 1.2em;

    li {
      font-size: 1em;
      list-style: none;
      padding: 0.5em;
      width: 14.8em;

      & + li {
        border-top: 1px solid #acacac;
      }
    }
  }
`;
