import React from 'react';
import { Grid, Header, Icon, Item, List, Segment } from 'semantic-ui-react';
import format from 'date-fns/format';

const UserDetailedDescription = ({ profile }) => {
  let createdAt;
  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), 'D MMM YYYY');
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon="smile" content="내 프로필" />
            <p>
              이름 : <strong>{profile.displayName}</strong>
            </p>
            <p>
              가입일 : <strong>{createdAt}</strong>
            </p>
            <p>
              신용등급 : <strong>{profile.creditrating} 등급 </strong>
            </p>
            <p>{profile.description}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon="heart outline" content="테스트" />
            {profile.interests ?
            <List>
              {profile.interests &&
                profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name="heart" />
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))}
            </List> : <p> 테스트 중입니다 </p>}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
