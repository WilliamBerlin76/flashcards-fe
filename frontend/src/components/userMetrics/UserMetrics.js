import React, { useState, useEffect } from "react";
import { bar, Line, Pie, Chart, doughnut, defaults } from 'chart.js';
import axios from "axios";

const UserMetrics = () => {

    const [potato, setPotato] = useState("bar");
    // Rename state!!!


    useEffect(() => {
        console.log("testing");

        let statsChart = document.getElementById("metricChart").getContext("2d");
        let chart = new Chart(statsChart, {
            // if (chart != undefined)
            type: potato,
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
    }, [potato])

    const typeSelect = (e) => {
        e.preventDefault();
        document.getElementById("someId").innerHTML = '&nbsp;';
        document.getElementById("someId").innerHTML = '<canvas id="metricChart"></canvas>';
        let val = e.target.value;
        console.log(e.target.value)
        setPotato(val)
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

                <div id="someId"><canvas id="metricChart"></canvas></div>
            </div>
        </div>
    )
}

export default UserMetrics;
