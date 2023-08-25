import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css'
import vector from './newAssignmentLogo/Vector.svg'
import tokenlogo from './newAssignmentLogo/ic_baseline-token.png'
import pairlogo from './newAssignmentLogo/fluent_pair-24-filled.png'

export default function Navigation() {

    const location = useLocation();
    let selectedItem = null;
    if (location.pathname.includes('tokenAddress')) {
        selectedItem = 'tokenAddress';
    }
    else if (location.pathname.includes('pairAddress')) {
        selectedItem = 'pairAddress';
    }

    return (
        <div>
            <header className='left-boxHeader'>
                <img src={vector} id='vector-svg' alt='logo' />
                <h1 id='logo-name'>NFTify</h1>
            </header>
            <div className='link-style'>
                <div className={`token-link-box ${selectedItem === 'tokenAddress' ? 'selected' : ''}`}>
                    <img alt='token-logo' src={tokenlogo} className='logos'></img>
                    <Link to='/tokenAddress' className='tokenAdressclass' >Token Address</Link>
                </div>
                <div className={`token-link-box ${selectedItem === 'pairAddress' ? 'selected' : ''}`}>
                    <img src={pairlogo} alt='pair-logo' className='logos'></img>
                    <Link to='/pairAddress' className='pairAdressclass' >Pair Address</Link>
                </div>
            </div>
        </div>
    )
}