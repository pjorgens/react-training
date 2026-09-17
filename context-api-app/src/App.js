import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import UserInfoContext from './context/UserInfoContext'; './context/UserInfoContext';
import BlogPage from './components/BlogPage';

export default function App() {

  const userInfo = { username: "Admin", isAdmin: true }

  return (
    <UserInfoContext.Provider value={userInfo}>
      <BlogPage></BlogPage>
    </UserInfoContext.Provider>
  );
}

