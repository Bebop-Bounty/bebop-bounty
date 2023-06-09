import styled, { keyframes } from 'styled-components';

export const StyledNavBar = styled.nav`
  border: solid 1px;
  width: 93%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 80px;
`;

export const StyledListBountyBtn = styled.button`
  font-family: 'Coromorant Garamond', serif;
  color: white;
  grid-column-start: 11;
  cursor: pointer;
  font-size: 20px;
  width: 150px;
  padding-left: 20px;
  padding-right: 20px;
  &::after {
    background: white;
  }
`;

// ========================================================
// ===================== Search Bar =======================
// ========================================================
export const StyledSearchBar = styled.div`
  grid-column: span 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledSearchInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: white;
  margin-left: 30px;
  width: 95%;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;
export const StyledSearchButton = styled.button`
  border: none;
  background: none;
  border-bottom: solid 1px white;
  position: relative;
  padding: 0;
  cursor: pointer;
  > svg:hover {
    transform: scale(1.3) perspective(1px);
    transition-duration: 0.3s;
  }
`;

// ========================================================
// ==================== Profile Pic =======================
// ========================================================
export const StyledProfilePic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 12;
  margin-right: 30px;
  > img {
    height: 55px;
    width: 55px;
    border-radius: 30px;
    object-fit: cover;
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.1) perspective(1px);
    transition-duration: 0.4s;
  }
`;

// ========================================================
// ==================== Profile Menu ======================
// ========================================================
const showModal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opactiy: 1;
  }
`;

export const StyledClearCurtain = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const StyledUpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #e7e5d5;
  position: absolute;
  right: 11%;
  top: 140px;
  animation: ${showModal} 1s forwards ease-out;
`;
export const StyledProfileMenuContainer = styled.div`
  position: absolute;
  right: 10%;
  border: solid 1px;
  border-top: transparent;
  width: 380px;
  height: 430px;
  top: 150px;
  animation: ${showModal} 1s forwards ease-out;
  background-color: #e7e5d5;
  color: #3e4334;
  box-shadow: 5px 5px 5px rgb(62, 67, 52);
  z-index: 5;
`;
export const StyledProfileMenuHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #3e4334;
  > img {
    height: 75px;
    width: 75px;
    border-radius: 50px;
    object-fit: cover;
    grid-column-start: 2;
    margin-right: 20px;
  }
  > div {
    font-family: Roboto;
    font-weight: 400;
    grid-column-start: 3;
    margin-left: 10px;
  }
  > p {
    margin-bottom: 0;
  }
`;
export const StyledProfileMenuProperties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  height: 260px;
  justify-content: space-between;
  > button {
    font-family: 'Coromorant Garamond', serif;
    font-size: 18px;
    cursor: pointer;
    color: #3e4334;
  }
`;

// ========================================================
// ==================== List Bounty =======================
// ========================================================
export const StyledListBountyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 10;
`;
export const StyledListBountyOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
`;
export const StyledListBountyBody = styled.div`
  color: #3e4334;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #e7e5d5;
  border-radius: 1px;
  width: 600px;
  height: 600px;
  > h2 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const StyledImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const StyledListBountyContentContainer = styled.div`
  border: solid 1px #3e4334;
  height: 490px;
  width: 520px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const StyledListBountyContent = styled.div`
  color: #3e4334;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
  height: 100%;
  width: 80%;
  input {
    border-bottom: 1px solid #3e4334;
  }
`;

export const StyledListBountyTitle = styled.div`
  display: flex;
`;
export const StyledListBountyTitleInput = styled.input`
  color: #3e4334;
  border-bottom: 1px solid #3e4334;
  width: 78%;
`;

export const StyledLBDropDowns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > select {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: #3e4334;
  }
`;

export const StyledListBountyCloseBtn = styled.button`
  color: #3e4334;
  font-family: 'Coromorant Garamond', serif;
  font-size: 18px;
  cursor: pointer;
  float: right;
  &:hover {
    transform: scale(1.3) perspective(1px);
    transition-duration: 0.4s;
  }
`;
export const StyledSubmitListBounty = styled.button.attrs({
  className: 'list-bounty-btn',
})`
  font-family: 'Coromorant Garamond', serif;
  font-size: 15px;
  position: relative;
  right: -40%;
  margin-top: 10px;
  cursor: pointer;
`;
