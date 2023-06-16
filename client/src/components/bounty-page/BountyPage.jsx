import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledFilterBar,
  StyledSelect,
  StyledLocation,
  StyledLocationInputs,
  StyledSeeMore,
} from './styled-components/bountypage.styled';
import { StyledBountyPageBorder } from '../../theme';
import NavBar from '../common/nav-bar/NavBar.jsx';
import BountyBoard from './BountyBoard.jsx';

export default function BountyPage({ toggleTheme }) {
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [allBounties, setAllBounties] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const searchIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="13px" width="13px" viewBox="0 0 512 512">
      <path
        fill="white"
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      />
    </svg>
  );
  const getAllBounties = () => {
    axios
      .get('http://54.176.108.13:8080/api/bounties')
      .then(({ data }) => setAllBounties(data))
      .catch((err) => console.error('There was a problem GETTING all bounties: ', err));
  };

  const submitCity = () => {
    if (city.length >= 2) {
      axios
        .get('http://54.176.108.13:8080/api/bounties', { params: { city: city } })
        .then(({ data }) => {
          setAllBounties(data);
          setCity('');
        })
        .catch((err) => console.error('There was a probelm retreiving city data', err));
    }
  };
  const submitState = () => {
    if (state.length >= 2) {
      axios
        .get('http://54.176.108.13:8080/api/bounties', { params: { state: state } })
        .then(({ data }) => {
          setAllBounties(data);
          setState('');
        })
        .catch((err) => console.error('There was a probelm retreiving state data', err));
    }
  };

  useEffect(() => {
    getAllBounties();
  }, []);

  useEffect(() => {
    console.log('categorrrry state', category);
    if (category) {
      axios
        .get('http://54.176.108.13:8080/api/bounties', { params: { category: category } })
        .then(({ data }) => {
          console.log('category data', data);
          setAllBounties(data);
          setCategory('');
        })
        .catch((err) => console.error('There was a problem retreiving category data', err));
    }
  }, [category]);

  useEffect(() => {
    axios
      .get('http://54.176.108.13:8080/api/bounties', { params: { sortBy: sortBy } })
      .then(({ data }) => {
        setAllBounties(data);
        setSortBy('');
      })
      .catch((err) => console.error('There was a problem retreiving sort data', err));
  }, [sortBy]);

  const seeMore = () => {
    //--get next 10 bounties
    // setPageNumber(pageNumber + 1);

    setPageNumber((prevNumber) => {
      prevNumber + 1;
    });
    axios
      .get('http://54.176.108.13:8080/api/bounties', {
        params: {
          page: pageNumber + 1,
        },
      })
      .then(({ data }) => {
        console.log('#####################', data);

        setAllBounties([...allBounties, ...data]);
      })
      .catch((err) => console.error('There was a probelm retreiving city data', err));
  };

  console.log('allBounties: ', allBounties);
  return (
    <StyledBountyPageBorder>
      <NavBar toggleTheme={toggleTheme} />
      <StyledFilterBar>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: 50 }}>
            Sort By:{' '}
            <StyledSelect defaultValue="Newest" onChange={(e) => setSortBy(e.target.value)}>
              <option>newest</option>
              <option>price-low-to-high</option>
              <option>price-high-to-low</option>
            </StyledSelect>
          </div>
          <div>
            Category:{' '}
            <StyledSelect defaultValue="" onChange={(e) => setCategory(e.target.value)}>
              <option>clothing</option>
              <option>decor</option>
              <option>gadget</option>
              <option>furniture</option>
            </StyledSelect>
          </div>
        </div>
        <StyledLocation>
          <StyledLocationInputs style={{ marginRight: 50 }}>
            City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button type="button" onClick={() => submitCity()}>
              {searchIcon}
            </button>
          </StyledLocationInputs>
          <StyledLocationInputs>
            State: <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            <button type="button" onClick={() => submitState()}>
              {searchIcon}
            </button>
          </StyledLocationInputs>
        </StyledLocation>
      </StyledFilterBar>
      <BountyBoard allBounties={allBounties} />
      <StyledSeeMore onClick={() => seeMore()}>See More...</StyledSeeMore>
    </StyledBountyPageBorder>
  );
}
