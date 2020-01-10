import React from 'react';
import firebase from 'firebase';
// import { bool } from './node_modules/prop-types';
import { StyledMenu } from './menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to='/DeckList' tabIndex={tabIndex}>
        Decks
      </Link>
      <Link to='/dashboard' tabIndex={tabIndex}>
        Dashboard
      </Link>

      <Link to='/Preferences' tabIndex={tabIndex}>
        Preferences
      </Link>

      <Link to='/login' onClick={props.logout}>
        Log Out
      </Link>
    </StyledMenu>
  );
};

// Menu.propTypes = {
//   open: bool.isRequired
// };

export default Menu;
