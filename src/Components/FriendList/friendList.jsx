import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import { FriendListItem } from '../FriendListItem/friendListItem';

export const FriendList = ({ listFriends }) => {
  const { friends } = styles;

  return (
    <ul className={friends}>
      {listFriends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  listFriends: PropTypes.array.isRequired,
};