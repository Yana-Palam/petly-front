import React from 'react';
import { NavList, NavListItem, NavLinkItem } from './Nav.styled';

const links = [
  {
    label: 'News',
    path: '/news',
  },
  {
    label: 'Notices',
    path: '/notices/sell',
  },
  {
    label: 'Our friends',
    path: '/friends',
  },
];

function Nav({ closeMobMenu }) {
  return (
    <nav>
      <NavList>
        {links.map(({ label, path }) => (
          <NavListItem key={label}>
            <NavLinkItem
              onClick={closeMobMenu}
              to={path}
              style={({ isActive }) =>
                isActive
                  ? {
                      color: '#F59256',
                    }
                  : { color: '#000' }
              }
            >
              {label}
            </NavLinkItem>
          </NavListItem>
        ))}
      </NavList>
    </nav>
  );
}

export default Nav;
