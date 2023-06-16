import React, { useContext, useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  StyledProfileMenuContainer,
  StyledProfileMenuHeader,
  StyledUpArrow,
  StyledProfileMenuProperties,
  StyledClearCurtain,
} from './navbar.styled';
import { firebaseApp } from '../../../firebase';
import { GlobalContext } from '../../GlobalContext.jsx';

export default function ProfileMenu({ toggleTheme, showProfileMenu, theme }) {
  const exampleImgURL = 'https://i.pinimg.com/736x/5b/91/44/5b914448091084b6aa3dc005fad52eba.jpg';
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const { setUserData, userData } = useContext(GlobalContext);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('Sign out successful.');
        setUserData({}); // clear current user data after sign out
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error occurrs during sign out:', error);
      });
  };

  const routeToMyBounties = (e) => {
    e.preventDefault();
    navigate('/profile/bounty-history');
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    navigate(`/user-profile/${userData.id}`);
  };

  return (
    <>
      <StyledClearCurtain onClick={showProfileMenu} />
      <StyledUpArrow />
      <StyledProfileMenuContainer>
        <StyledProfileMenuHeader>
          <img src={userData.profile_image || exampleImgURL} alt="profile pic" />
          <div>
            <p>{userData.username || 'Guest'}</p>
            <p>{userData.email || ''}</p>
          </div>
        </StyledProfileMenuHeader>
        <StyledProfileMenuProperties>
          <button type="button" onClick={handleProfileClick}>
            Profile
          </button>
          <button type="button">Notifications</button>
          <button type="button" onClick={(e) => routeToMyBounties(e)}>
            Your Bounties
          </button>
          <button
            type="button"
            onClick={() => {
              toggleTheme();
            }}
          >
            {theme === 'dark' ? 'Light Mode 🌞' : 'Dark Mode 🌜'}
          </button>
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </StyledProfileMenuProperties>
      </StyledProfileMenuContainer>
    </>
  );
}
