import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'; // Import your existing page component
import AboutBand from './components/about/AboutBand';
import ListShows from './components/shows/ListShows';
import Login from './davai/login/Login';
import Register from './davai/login/Register';
import EndRegister from './davai/login/EndRegister';
import MainMenu from './davai/menu/MainMenu';
import ListBands from './davai/choose/ListBands';
import SelectedBands from './davai/choose/SelectedBands';
import FilterPeople from './davai/menu/FilterPeople';
import UserProfile from './davai/profile/UserProfile';
import EditProfile from './davai/profile/EditProfile';
import Chat from './davai/chat/Chat';
import ChatList from './davai/chat/ChatList';
import './styles/global.css';  // Import global styles
import './styles/GlobalDavai.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/listshows" element={<ListShows />} />
        <Route path="/AboutBand" element={<AboutBand />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/EndRegister" element={<EndRegister />} />


        <Route path="/MainMenu" element={<MainMenu />} />
        <Route path="/FilterPeople" element={<FilterPeople />} />

        <Route path="/ListBands" element={<ListBands />} />
        <Route path="/SelectedBands" element={<SelectedBands />} />

        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/EditProfile" element={<EditProfile />} />

        <Route path="/Chat" element={<Chat />} />
        <Route path="/ChatList" element={<ChatList />} />
        
      </Routes>
    </Router>
  );
}

export default App;
