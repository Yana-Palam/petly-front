import React from 'react';
import {
  LinkStyled,
  List,
  ListWrapper,
  AccentLink,
  Li,
} from './AuthNav.styled';

function AuthNav() {
  return (
    <ListWrapper>
      <List>
        <Li>
          <AccentLink to="/login">Login</AccentLink>
        </Li>
        <Li>
          <LinkStyled to="/register">Registration</LinkStyled>
        </Li>
      </List>
    </ListWrapper>
  );
}

export default AuthNav;
