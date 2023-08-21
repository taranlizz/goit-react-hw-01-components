import { Layout } from './Layout';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <Layout>
      <Profile profileInfo={user} />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends}></FriendList>
    </Layout>
  );
};
