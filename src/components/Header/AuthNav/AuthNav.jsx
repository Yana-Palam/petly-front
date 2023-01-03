import React from 'react';
import {
  LinkStyled,
  List,
  ListWrapper,
  AccentLink,
  Li,
} from './AuthNav.styled';

function AuthNav({ onClick }) {
  return (
    <ListWrapper>
      <List>
        <Li>
          <AccentLink onClick={onClick} to="/login">
            Login
          </AccentLink>
        </Li>
        <Li>
          <LinkStyled onClick={onClick} to="/register">
            Registration
          </LinkStyled>
        </Li>
      </List>
    </ListWrapper>
  );
}

export default AuthNav;
