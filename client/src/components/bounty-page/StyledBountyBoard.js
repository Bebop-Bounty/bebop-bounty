import styled from 'styled-components';
import CardFlip from './CardFlip.jsx';

export const StyledBountyBoardWrapper = styled.div`
  /* border: 1px solid; */
  width: 93%;
  margin: 10px auto;
  /* background-color: lightgray; */
`;
export const StyledBountyCollection = styled.div`
  /* border: solid; */
  display: flex;
  flex-wrap: wrap;
  /* background-color: lightgray; */
  justify-content: space-between;
`;

export const StyledDropdown = styled.select`
  border: solid;
`;

export const StyledCardFlip = styled(CardFlip)`
  border: solid;
  background-color: yellow;
  z-index: 2;
  cursor: pointer;
`;

export const StyledBountyCard = styled.div`
  display: inline-block;
  /* box-shadow: 0 0 3px black; */
  border: 1.3px solid white;
  box-shadow: 3px 3px 3px rgb(62, 67, 52);
  width: 280px;
  height: 340px;
  /* padding: 10px; */
  margin-bottom: 12px;
  cursor: pointer;
  color: rgb(62, 67, 52);
  border-radius: 10px;
  background-color: #e7e5d5;
  /* background-color: #e7e5d5; */
`;

// export const StyledBountyCardBack = styled(StyledBountyCard)`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 6%;
// `;

export const FlipToFront = styled.div``;

export const StyledCardBackBottom = styled.div`
  /* border: solid; */
  width: 100%;
  /* display: flex;
  justify-content: space-between; */
  position: absolute;
  left: 30%;
  bottom: 8%;
`;

export const OfferLayoutCenter = styled.div`
  /* border: solid; */
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledImageContainer = styled.div`
  position: relative;
  height: 65%;
  width: 100%;
  /* margin-bottom: 20px; */
  /* border: solid; */
`;

export const StyledImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* background-color: white; */
`;

export const StyledPrice = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
  /* height: 80%;
  text-align: center; */
  font-size: x-large;
  position: absolute;
  left: 38%;
  bottom: 0%;
  color: white;
  /* color: white;
  margin-bottom: 4%; */
  /* border: solid; */
`;

export const StyledTitleAndName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledWanted = styled.div`
  position: absolute;
  /* background-color: grey; */
  /* opacity: 0.75; */
  color: white;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: x-large;
  z-index: 2;
  /* border: solid; */
`;

export const StyledMidcardContainer = styled.div`
  /* border: solid; */
  /* padding-top: 2%; */
  padding: 3%;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4%;
  margin-top: 10px;
  /* align-items: center; */
  /* height: fit-content; */
`;
export const StyledBottomCardContainer = styled.div`
  /* border: solid; */
  padding: 3%;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  /* height: fit-content; */
`;

export const StyledTitle = styled.div`
  font-size: large;
  font-weight: bold;
  /* border: solid; */
`;

export const StyledBuyerName = styled.div`
  font-size: small;
  cursor: pointer;
  /* border: solid; */
`;

export const StyledDeadline = styled.div`
  font-size: small;
  /* border: solid; */
`;

export const StyledCardBackText = styled.div`
  /* border: solid; */
`;

export const StyledRatingBox = styled.div`
  /* border: solid; */
  width: 100px;
  height: 15px;
  padding-bottom: 10%;
  display: flex;
`;

export const StyledMakeOfferButton = styled.button`
  justify-self: baseline;
  align-self: center;
  /* border: solid; */
`;

export const StyledCurrentOffers = styled.div`
  font-size: small;
  /* border: solid; */
`;

export const ModalWrapper = styled.div`
  /* border: solid; */
`;

export const StyledCategory = styled.div`
  /* border: solid; */
`;
export const StyledDescription = styled.div`
  /* border: solid; */
`;
export const StyledPreferredPayment = styled.div`
  /* */
`;

export const OfferLayout = styled.div`
  /* */
`;
