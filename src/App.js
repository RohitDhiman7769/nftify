import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';
import './App.css';
import TokenAdress from './TokenAddress';
import PairAddress from './PairAddress';
import searchIcon from './newAssignmentLogo/Vector.svg'
import lodash from 'lodash';


function App() {
  const [searchValue, setSearchValue] = useState('')
  const [addressData, setAddressData] = useState([])


  const location = useLocation()
  const path = location.pathname
  console.log(path)

  useEffect(() => {
    setSearchValue('');
    setAddressData([])
  }, [path])

  function handleKeyDown(event) {
    if (searchValue === '') {
      return;
    }
    if (event?.key === 'Enter') {
      event.preventDefault();
      fetchData();
      setSearchValue('');
    }
  }

  async function fetchData() {
    try {
      if (path.includes('tokenAddress')) {
        const tokenData = await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${searchValue}`);
        let orderedData = lodash.orderBy(tokenData.data.pairs, 'priceUsd', 'desc');
        orderedData = lodash.take(orderedData, 10);
        setAddressData(orderedData)
        console.log(tokenData)

      } else {
        const PairData = await axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${searchValue}`);
        let orderedData = lodash.orderBy(PairData.data.pairs, 'priceUsd', 'desc');
        orderedData = lodash.take(orderedData, 10);
        setAddressData(orderedData)
        console.log(PairData)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='left-box'>
          <Navigation />
        </div>
        <div className='right-box'>
            <div className='serach-input' >
              <input type='text' value={searchValue} placeholder='Search' className='serchBar' onChange={(e) => setSearchValue(e.target?.value)} onKeyDown={handleKeyDown}></input>
              <img alt='search-icon' src={searchIcon} id='seachIcon' />
            </div>
          <Routes>
            <Route path='/tokenAddress' element={<TokenAdress data={addressData} />} />
            <Route path='/pairAddress' element={<PairAddress data={addressData} />} />
            <Route path='/*' element={<Navigate to={'/tokenAddress'} />} />
          </Routes>
        </div>
      </div>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
