import React, { useState, useEffect } from "react";
import {bar, Line, Pie, Chart} from 'chart.js';

const UserMetrics = () => {

    const [potato, setPotato] = useState(['bar', 'line', 'pie']);
    // Rename state!!!
    
    useEffect(() => {
        let statsChart = document.getElementById("metricChart").getContext("2d");
        let chart = new Chart(statsChart, {
            type: `bar`,
            data: {
                datasets: [{
                    label: "THE dataset",
                    data: [3, 52, 59, 24, 98, 15, 75]
                }]
            }
        })
    }, [])

    const typeSelect = (e) => {
        e.preventDefault();
        let val = e.target.value;
        console.log('LOOKATME',val)
        setPotato(val.toLowerCase());

        let statsChart = document.getElementById("metricChart").getContext("2d");
        let chart = new Chart(statsChart, {
            type: potato,
            data: { 
                labels: ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "THE dataset",
                    data: [3, 52, 59, 24, 98, 15, 75]
                }]
            }
        })
    }

    return (
        <div>
            <div className="chart-container">
                <select id="chartType" onChange={typeSelect}>
                    <option id="0">Bar</option>
                    <option id="1">Line</option>
                    <option id="2">Pie</option>    
               </select>

               <canvas id="metricChart"></canvas>
            </div>
        </div>
    )
}

export default UserMetrics;
