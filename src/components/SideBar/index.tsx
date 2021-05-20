import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search in Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="You may like it"
            elements={[
              <FollowSuggestion name="Elon Musk" nickname="@elonmusk" />,
              <FollowSuggestion name="Jeff Bezos" nickname="@JeffBezos" />,
              <FollowSuggestion name="Mark Zuckerberg" nickname="@zuck" />,
            ]}
          />
          <List
            title="You may like it"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="You may like it"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="You may like it"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="You may like it"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
