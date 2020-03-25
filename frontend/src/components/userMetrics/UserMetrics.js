import React, { useState, useEffect } from "react";
import { bar, Line, Pie, Chart, doughnut, defaults } from 'chart.js';
import axios from "axios";
import firebase from 'firebase'

const UserMetrics = () => {

    const [potato, setPotato] = useState("bar");
    // Rename state!!!


    useEffect(() => {


        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // let id = firebase.auth().currentUser.uid;
                let id = "4fIUocfjIbUFYs46CD0q9QtOdrO2"
                const d = new Date();

                axios
                    .get(
                        `https://flashcards-be.herokuapp.com/api/metrics/${id}/${7}`
                    )
                    .then(res => {
                        console.log(res);

                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                return null;
            }
        });

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
