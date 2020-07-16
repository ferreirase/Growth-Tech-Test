import styled from 'styled-components';

export const ContainerAcordeon = styled.div`
  width: 95%;
  position: relative;
  top: 75px;
  margin: 0 auto;
  animation: fadein 0.6s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
