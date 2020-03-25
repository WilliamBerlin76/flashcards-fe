import React, { useState, useEffect } from "react";
import {bar, Line, Pie, Chart, doughnut} from 'chart.js';
import axios from "axios";

const UserMetrics = () => {

    const [potato, setPotato] = useState();
    // Rename state!!!
    
    
    useEffect(() => {
        let statsChart = document.getElementById("metricChart").getContext("2d");
        let chart = new Chart(statsChart, {
            type: 'bar',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "THE dataset",
                    data: [3, 52, 59, 24, 98, 15, 75],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                }],
                
            }
        })
    }, [])

    const typeSelect = (e) => {
        e.preventDefault();
        let val = e.target.value;
        console.log(e.target.value)

        let statsChart = document.getElementById("metricChart").getContext("2d");

        let chart = new Chart(statsChart, {
            type: val,
            data: { 
                labels: ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "THE dataset",
                    data: [3, 52, 59, 24, 98, 15, 75],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                }]
            }
        })
    }

    return (
        <div>
            <div className="chart-container">
                <select id="chartType" onChange={typeSelect}>
                    <option value="bar">Bar</option>
                    <option value="line">Line</option>
                    <option value="pie">Pie</option>
                    <option value="doughnut">Doughnut</option>  
               </select>

               <canvas id="metricChart"></canvas>
            </div>
        </div>
    )
}

export default UserMetrics;
