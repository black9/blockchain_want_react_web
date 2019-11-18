import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const SignedInMenu = ({signOut, profile, auth}) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={profile.photoURL || "/assets/user.png"} />
      <Dropdown pointing="top left" text={profile.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to={`/profile/${auth.uid}`} text="내 투자, 대출 정보" icon="user" />
          <Dropdown.Item as={Link} to='/settings' text="내 정보 수정" icon="settings" />
          <Dropdown.Item onClick={signOut} text="로그아웃" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
