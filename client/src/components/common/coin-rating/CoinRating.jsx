/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import FilledCoinIcon from '../../../assets/coin-gold.png';
import EmptyCoinIcon from '../../../assets/coin-grey.png';

// const Host = styled.div`
//   display: flex;
//   width: fit-content;
//   margin: 0;
//   height: fit-content;
//   position: relative;
//   color: #ccc;
//   width: 150px;
//   height: 15px;
//   padding-bottom: 10%;
// `;

// const FilledCoinContainer = styled.div`
//   position: absolute;
//   z-index: 1;
//   display: flex;
//   overflow: hidden;
//   width: ${(props) => props.rating};
// `;

// const FilledCoin = styled.img`
//   height: 20px;
//   width: 20px;
// `;

// const EmptyCoinContainer = styled.div`
//   position: absolute;
//   z-index: 0;
//   display: flex;
// `;

// const EmptyCoin = styled.img`
//   height: 20px;
//   width: 20px;
// `;

// const user = {
//   rating_thumbs_up: 35,
//   rating_thumbs_down: 15,
// };
const Host = styled.div`
  display: flex;
  width: fit-content;
  margin: 0;
  height: fit-content;
  position: relative;
  color: #ccc;
  width: 150px;
  height: 15px;
  padding-bottom: 10%;
`;

const FilledCoinContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  overflow: hidden;
  width: ${(props) => props.rating};
`;

const FilledCoin = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;

const EmptyCoinContainer = styled.div`
  position: absolute;
  z-index: 0;
  display: flex;
`;

const EmptyCoin = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`;
function CoinRating({ user, size }) {
  // const diameter = size === 'small' ? `20px` : `30px`;

  const rating = `${Math.round(
    (user.rating_thumbs_up / (user.rating_thumbs_up + user.rating_thumbs_down)) * 100
  ).toFixed(2)}%`;
  return (
    <Host>
      <FilledCoinContainer rating={rating}>
        {[...Array(5)].map((e, i) => (
          <FilledCoin src={FilledCoinIcon} size={size} key={`filled-${i}`} />
        ))}
      </FilledCoinContainer>
      <EmptyCoinContainer>
        {[...Array(5)].map((e, i) => (
          <EmptyCoin src={EmptyCoinIcon} size={size} key={`empty-${i}`} />
        ))}
      </EmptyCoinContainer>
    </Host>
  );
}

export default CoinRating;

// background: linear-gradient(90deg, gold var(--ratings), var(--star-background) var(--ratings));
