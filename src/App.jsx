
import './App.css';

import { Profile } from './Components/Profile/profile';
import profile from './Components/Profile/user.json';

import { Statistics } from './Components/Statistics/statistics';
import data from './Components/Statistics/data.json';

import { FriendList } from './Components/FriendList/friendList';
import friend from './Components/FriendList/friends.json';

import { TransactionHistory } from './Components/TransactionHistory/transactionHistory';
import transaction from './Components/TransactionHistory/transactions.json';


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
