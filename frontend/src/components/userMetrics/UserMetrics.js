import React, { useState, useEffect, useRef } from "react";
import { Doughnut, Bar, Line, Pie} from 'react-chartjs-2'
import axios from "axios";
import firebase from 'firebase'


    const options = {
        
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        
    }

const UserMetrics = () => {

    const [newData, setNewData] = useState({
        data: {
            labels:['Sun', 'Mon', 'Tue','Wed','Thur','Friday','Sat'],
            datasets: [
            {
                label: "Cards Correct",
                data: [ 4, 5, 9, 5, 4, 10, 4],
                backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 1)",
                "red",
                "orange",
                "gold",
                ]
            }
            ],
        }
    });

    const [myChart, setMyChart] = useState(<Bar data={newData.data} width={100} height={50} options={options}/>);
    const [userData, setUserData] = useState([]);
    const [thing, setThing] = useState(false);
    const [days, setDays] = useState({
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
        Thu:  {
            cardsCorrect: 0
        },
        Fri:  {
            cardsCorrect: 0
        },
        Sat:  {
            cardsCorrect: 0
        }
    });

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged ( async function (user)  {
    //         if (user) {
    //             // let id = firebase.auth().currentUser.uid;
    //             let id = "4fIUocfjIbUFYs46CD0q9QtOdrO2"
    //             const d = new Date().getDay();

    //             axios
    //                 .get(
    //                     `https://flashcards-be.herokuapp.com/api/metrics/${id}/${d}`
    //                 )
    //                 .then(res => {
    //                     setUserData(res.data)
    //                     for(let i = res.data.length -1; i >= 0; i--) {
    //                         console.log(i)
    //                         let newDate = new Date(res.data[i].date).toDateString();
    //                         let other = newDate.split(" ");
                        
    //                         if(days.other[0].metrics.cardsCorrect === res.data.other[0].metrics.cardsCorrect) {
    //                             return;
    //                         } else {
    //                             setDays({
    //                                 ...days,
    //                                 [other[0]]: res.data[i].metrics
    //                             })
    //                         }
    //                     }

    //                     setNewData({
    //                         data: {
    //                             labels:['Sun', 'Mon', 'Tue','Wed','Thur','Friday','Sat'],
    //                             datasets: [
    //                             {
    //                                 label: "Cards Correct",
    //                                 data: [ days.Sun.cardsCorrect, days.Mon.cardsCorrect, days.Tues.cardsCorrect, days.Wed.cardsCorrect, days.Thu.cardsCorrect, days.Fri.cardsCorrect, days.Sat.cardsCorrect],
    //                                 backgroundColor: [
    //                                 "rgba(255, 99, 132, 1)",
    //                                 "rgba(54, 162, 235, 1)",
    //                                 "rgba(255, 206, 86, 1)",
    //                                 "rgba(153, 102, 255, 1)",
    //                                 "red",
    //                                 "orange",
    //                                 "gold",
    //                                 ]
    //                             }
    //                             ]
    //                         }
    //                     })
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                 });
    //         } else {
    //             return null;
    //         }
        
    //     });
    // }, [userData])   

    const chartSelect = e => {
        console.log(e.target.value)
        switch(e.target.value) {
            case "Bar":
                setMyChart(
                    <Bar data={newData.data} width={100} height={50} options={options}/>
                )
                break;
            case "Line":
                setMyChart(
                    <Line data={newData.data} width={100} height={50}  options={options}/>
                )
                break;
            case "Doughnut":
                setMyChart(
                    <Doughnut data={newData.data} width={100} height={50}  options={options}/>
                )
                break;
            case "Pie":
                setMyChart(
                    <Pie data={newData.data} width={100} height={50}  options={options}/>
                )
                break;
        }
    }

    return (
        <div>
            <div className="chart-container">
                <select id="chartType" onChange={chartSelect}>
                    <option value="Bar">Bar</option>
                    <option value="Line">Line</option>
                    <option value="Pie">Pie</option>
                    <option value="Doughnut">Doughnut</option>
                </select>

               {myChart}
            </div>
        </div>
    )
}

export default UserMetrics;
