import React from 'react';
import { NavList, NavListItem, NavLinkItem } from './Nav.styled';

function Nav({ closeMobMenu }) {
  return (
    <nav>
      <NavList>
        <NavListItem>
          <NavLinkItem onClick={closeMobMenu} to="/news">
            News
          </NavLinkItem>
        </NavListItem>
        <NavListItem>
          <NavLinkItem onClick={closeMobMenu} to="/notices/sell">
            Notices
          </NavLinkItem>
        </NavListItem>
        <NavListItem>
          <NavLinkItem onClick={closeMobMenu} to="/friends">
            Our friend
          </NavLinkItem>
        </NavListItem>
      </NavList>
    </nav>
  );
}

export default Nav;