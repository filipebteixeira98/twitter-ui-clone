import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';

export const Container = styled.div``;

export const Banner = styled.div``;

export const Avatar = styled.div``;

export const ProfileData = styled.div``;

const iconCSS = css`
  height: 20px;
  width: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div``;
