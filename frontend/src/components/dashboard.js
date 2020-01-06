import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DashNav from './dashNav';

const Dashboard = props => {
    return(
        <>
            <DashNav/>
            <h2>Dashboard</h2>
        </>
    )
};

export default Dashboard;