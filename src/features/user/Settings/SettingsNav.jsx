import React from 'react';
import { Grid, Menu, Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom'

const SettingsNav = () => {
  return (
    <Grid.Column width={4}>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile" />
        <Menu.Item as={NavLink} to='/settings/basic'> 프로필 수정 </Menu.Item>
        <Menu.Item as={NavLink} to='/settings/about'> 자기 소개  </Menu.Item>
        <Menu.Item as={NavLink} to='/settings/photos'>프로필 사진 변경</Menu.Item>
      </Menu>
      <Grid.Row />
      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Account"
        />
        <Menu.Item as={NavLink} to='/settings/account'> 비밀번호 변경</Menu.Item>
      </Menu>
    </Grid.Column>
  );
};

export default SettingsNav;
