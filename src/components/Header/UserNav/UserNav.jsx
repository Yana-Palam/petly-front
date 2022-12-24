import React from 'react';
import { AccentLink } from '../AuthNav/AuthNav.styled';
import account from '../../../assets/icons/account_logo.svg';
import { AccountLinkWrapper } from './UserNav.styled';

function UserNav({ closeModal }) {
  return (
    <AccountLinkWrapper>
      <AccentLink
        onClick={closeModal}
        style={{ padding: '8px 36px', outline: 'none' }}
        to="/user"
      >
        <img src={account} alt="account logo" style={{ marginRight: '14px' }} />
        Account
      </AccentLink>
    </AccountLinkWrapper>
  );
}

export default UserNav;
