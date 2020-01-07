import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DashNav from '../dashNav/dashNav';
import { getDecks, getCards } from '../../actions';
import { connect } from 'react-redux';
import './dashboard.scss';

const Dashboard = props => {
    const deckArr = ['Chemistry', 'Biology'];
    // useEffect(() => {
    //     props.getDecks();
    // }, []);

    // props.decks.map(item => {
    //     console.log('in map', item)
    //     props.getCards(item)
    // });

    // props.decks.map(item => {
    //     console.log('map', item)
    //     deckArr.push(item)
    // })

    // deckArr.map(item => {
    //     props.getCards(item)
    // })

    // props.cards.map(item => {
    //     console.log('HEREHERE', item)
    // })
    console.log('DECKARR', deckArr)
    return(
        <>
            <DashNav/>
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
            </section>
            
            {deckArr.map(item => { 
                return(
                    <div className='deck-card'>
                        <h3 key={item}>{item}</h3>
                        <p>5 cards</p>
                    </div>
                )
            })}
            <button>Create</button>
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