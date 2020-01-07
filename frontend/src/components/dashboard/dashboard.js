import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DashNav from '../dashNav/dashNav';
import { getDecks } from '../../actions';
import { connect } from 'react-redux';

const Dashboard = props => {
    
    useEffect(() => {
       props.getDecks()  
    }, [])
    
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
                    <div className='numcard'></div>
                    <h3 className='bignum'>123</h3>
                </div>
            </section>
            
            {props.decks.map(deck => {
                console.log(deck)
                return(
                    <p key={deck}>{deck}</p>
                )
            })}
        </>
    )
};

const mapStateToProps = state => {

    return {
        decks: state.decks,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    { getDecks }
)(Dashboard);