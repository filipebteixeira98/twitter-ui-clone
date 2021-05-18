import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        You retweeted
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>september 14th</time>
          </Header>
          <Description>Learn more about React.js world 🚀</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              87
            </Status>
            <Status>
              <RetweetIcon />
              424
            </Status>
            <Status>
              <LikeIcon />
              1612
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
