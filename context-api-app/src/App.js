import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import UserInfoContext from './context/UserInfoContext'; './context/UserInfoContext';
import BlogPage from './components/BlogPage';
import { ThemeProvider } from './context/ThemeProvider';
import ContentComponent from './components/ContentComponent';

export default function App() {

  const userInfo = { username: "Admin", isAdmin: true }

  return (
    <ThemeProvider>
      <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
        <ContentComponent></ContentComponent>
      </UserInfoContext.Provider>
    </ThemeProvider>
  );
}

