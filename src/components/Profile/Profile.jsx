import PropTypes from 'prop-types';

import {
  Wrapper,
  WrapperUserInfo,
  Username,
  Tag,
  Location,
  StatsList,
  Item,
  Name,
  Value,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wrapper>
      <WrapperUserInfo>
        <img src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </WrapperUserInfo>

      <StatsList>
        <Item>
          <Name>Followers</Name>
          <Value>{followers}</Value>
        </Item>
        <Item>
          <Name>Views</Name>
          <Value>{views}</Value>
        </Item>
        <Item>
          <Name>Likes</Name>
          <Value>{likes}</Value>
        </Item>
      </StatsList>
    </Wrapper>
  );
};

Profile.propTypes = {
  info: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
