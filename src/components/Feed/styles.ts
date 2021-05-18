import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  font-size: 15px;
  font-weight: bold;
  color: var(--twitter);
  text-align: center;
  outline: 0;
  border-bottom: 2px solid var(--twitter);
  cursor: pointer;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
