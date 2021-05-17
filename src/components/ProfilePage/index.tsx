import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>Edit profile</EditButton> */}
        <h1>John Doe</h1>
        <h2>@johndoe</h2>
        <p>
          Developer at <a href="https://twitter.com">Twitter&copy;</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Bahia, Brasil
          </li>
          <li>
            <CakeIcon />
            Was born in march 21st 1998
          </li>
        </ul>
        <Followage>
          <span>
            following <strong>321</strong>
          </span>
          <span>
            <strong>7437</strong> followers
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
