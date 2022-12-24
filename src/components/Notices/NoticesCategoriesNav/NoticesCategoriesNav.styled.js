import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CategoryPage = styled(NavLink)`
  display: flex;
  gap: 10px;
  padding: 10px 28px;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: #ffffff;
  color: black;

  .active {
    color: orange;
  }
`;
