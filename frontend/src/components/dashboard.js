import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DashNav from './dashNav';
import { getDecks } from '../actions';
import { connect } from 'react-redux';

const Dashboard = props => {
    
    useEffect(() => {
       props.getDecks()  
    }, [])
    
    return(
        <>
            <DashNav/>
            <h2>Dashboard</h2>
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