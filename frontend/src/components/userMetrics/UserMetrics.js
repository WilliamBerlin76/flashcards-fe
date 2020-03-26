import React, { useState, useEffect } from "react";
import { bar, Line, Pie, Chart, doughnut, defaults } from 'chart.js';
import axios from "axios";
import firebase from 'firebase'

const UserMetrics = () => {
    const [myChart, setMyChart] = useState("bar");
    const [userData, setUserData] = useState([]);
    const [d, setDays] = useState({
        Sun: {
            cardsCorrect: 0
        },
        Mon:  {
            cardsCorrect: 0
        },
        Tues:  {
            cardsCorrect: 0
        },
        Wed:  {
            cardsCorrect: 0
        },
        Thurs:  {
            cardsCorrect: 0
        },
        Fri:  {
            cardsCorrect: 0
        },
        Sat:  {
            cardsCorrect: 0
        }
    })

    console.log("res", userData);

    useEffect(() => {
         firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // let id = firebase.auth().currentUser.uid;
                let id = "4fIUocfjIbUFYs46CD0q9QtOdrO2"
                const d = new Date().getDay();

                axios
                    .get(
                        `https://flashcards-be.herokuapp.com/api/metrics/${id}/${d}`
                    )
                    .then(res => {
                        setUserData(res.data)
                        // console.log(res.data[0].date);
                        // let date = res.data[0].date;
                        // let newDate = ( date / (60*60*24*1000));
                        // console.log("newDate", date);

                        // 1585137600000
                        // console.log(newDate.toDateString());

                        res.data.map(day => {
                            let newDate = new Date(day.date).toDateString();

                            let other = newDate.split(" ");
                            setDays({
                                ...d,
                                [other[0]]: day.metrics
                            })
                        })

                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                return null;
            }
        });
    }, [])

    useEffect(() => {
        // dailyStats(userData[0].date);

        let statsChart = document.getElementById("metricChart").getContext("2d");
        let chart = new Chart(statsChart, {
            // if (chart != undefined)
            type: myChart,
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "THE dataset",
                    data: [`${d.Sun.cardsCorrect}`, `${d.Mon.cardsCorrect}`, `${d.Tues.cardsCorrect}`, `${d.Wed.cardsCorrect}`, `${d.Thurs.cardsCorrect}`,, `${d.Fri.cardsCorrect}`, `${d.Sat.cardsCorrect}`],
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
    }, [myChart])

    const test = e => {
        console.log(d);
    }

    const typeSelect = (e) => {
        e.preventDefault();
        document.getElementById("someId").innerHTML = '&nbsp;';
        document.getElementById("someId").innerHTML = '<canvas id="metricChart"></canvas>';
        let val = e.target.value;
        console.log(e.target.value)
        setMyChart(val)
    }

    return (
        <div>
            <div className="chart-container">
                <button onClick={test}>log</button>
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
