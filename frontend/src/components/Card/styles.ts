import styled from 'styled-components';

export const CardComponent = styled.div`
  max-width: 300px;
  margin-left: 20px;
  margin-top: 20px;

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
