import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DashNav from '../dashNav/dashNav';
import DeckCards from './deckcards/deckcards.js';
import { getDecks, getCards } from '../../actions';
import { connect } from 'react-redux';
import './dashboard.scss';

const Dashboard = props => {
    const [deckArr, setDeckArr] = useState([]);
    useEffect(() => {
        props.getDecks();
    }, []);

    useEffect(() => {
        setDeckArr(props.decks)
    }, [props.decks])

    return(
        <>
            <section className='study-data'>
                <div className='timeline-selectors'> 
                    <span>Today</span>
                    <span>This Week</span>
                    <span>Lifetime</span>
                </div>
                <div className='studied-container'>
                    <div className='numcard'>
                        <p className='bignum'>123</p>
                        <p>Studied</p>
                    </div>
                    <div className='numcard'>
                        <p className='bignum'>123</p>
                        <p>Mastered</p>
                    </div>
                </div>
            </section>

            <section className='decks-section'>
                <div className='decks-selectors'>
                    <span>Recent Decks</span>
                    <span>All Decks</span>
                </div>
            
                {deckArr.map(item => { 
                    return(
                        <DeckCards key={item} deckName={item} />
                    )
                })}
            </section>
            <button className='bottom-button'>Create</button>
        </>
    )
};

const mapStateToProps = state => {

    return {
        cards: state.cards,
        decks: state.decks,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    { getDecks, getCards }
)(Dashboard);