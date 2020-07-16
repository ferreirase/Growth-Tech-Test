import styled, { css } from 'styled-components';

interface ContainerCardProps {
  test: boolean;
}

export const ContainerCards = styled.div<ContainerCardProps>`
  /*padding: 20px 50px;*/
  max-width: 75%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  animation: fadein 0.6s;

  ${(props) =>
    props.test &&
    css`
      justify-content: left;
    `}

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1294px) {
    justify-content: center;
  }
`;
