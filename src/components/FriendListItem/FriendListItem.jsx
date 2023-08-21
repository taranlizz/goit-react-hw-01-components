import { ListItem } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friendInfo: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <span></span>
      <img src={avatar} alt="User avatar" width="54" height="54" />
      <p>{name}</p>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friendInfo: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
