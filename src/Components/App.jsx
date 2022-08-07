
import './App.css';

import { Profile } from './Profile/profile';
import profile from './Profile/user.json';

import { Statistics } from './Statistics/statistics';
import data from './Statistics/data.json';

import { FriendList } from './FriendList/friendList';
import friend from './FriendList/friends.json';

import { TransactionHistory } from './TransactionHistory/transactionHistory';
import transaction from './TransactionHistory/transactions.json';


export const App = () => (
  <>
  <Profile
  username={profile.username}
  tag={profile.tag}
  location={profile.location}
  avatar={profile.avatar}
  stats={profile.stats}
  />

<Statistics 
titleStats="Upload Stats" 
uploadStats={data} 
/>

<FriendList 
listFriends={friend} />

<TransactionHistory 
items={transaction} />


  </>
);

export default App;
