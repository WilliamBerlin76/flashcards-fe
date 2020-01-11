import React from 'react';
import firebase from 'firebase';
// import { bool } from './node_modules/prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to='/DeckList' onClick={props.closeMenu} tabIndex={tabIndex}>
        Decks
      </Link>
      <Link to='/dashboard' onClick={props.closeMenu} tabIndex={tabIndex}>
        Dashboard
      </Link>

      <Link to='/Preferences' onClick={props.closeMenu} tabIndex={tabIndex}>
        Preferences
      </Link>

      {firebase.auth().currentUser ? (
        <Link to='/' onClick={props.logout}>
          Log Out
        </Link>
      ) : null}
    </StyledMenu>
  );
};

// Menu.propTypes = {
//   open: bool.isRequired
// };

export default Menu;
