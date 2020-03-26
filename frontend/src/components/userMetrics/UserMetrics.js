import React, { useState, useEffect } from "react";
// import { bar, Line, Pie, Chart, doughnut, defaults } from 'chart.js';
import { Doughnut, Bar, Line, Pie} from 'react-chartjs-2'
import axios from "axios";
import firebase from 'firebase'

const UserMetrics = () => {
    const [myChart, setMyChart] = useState("bar");
    const [newData, setNewData] = useState({})
    const [userData, setUserData] = useState([]);
    const [abr, setAbr] = useState([]);
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
    })


  let arr = [];


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
                       
                       console.log(res.data);
                        // res.data.map(day => {
                        
                        //     let newDate = new Date(day.date).toDateString();
                        //     console.log(newDate)
                        //     let other = newDate.split(" ");
                        //     console.log(other[0])
                        //     setDays({
                        //         ...days,
                        //         [other[0]]: day.metrics
                        //     })
                        //     console.log(days)
                        

                             
                        //     //   setDays({
                        //     //       ...days,
                        //     //       [other[0]]: day.metrics
                        //     //   })
                        //     // daySet(other[0], day.metrics);
                        // })

                        for(let i = res.data.length; i > 0; i--) {
                            let newDate = new Date(res.data[i].date).toDateString();
                            let other = newDate.split(" ");
                            setDays({
                                ...days,
                                [other[0]]: res.data[i].metrics
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                return null;
            }
        });
    }, [])

    const daySet = () => {
        setDays({
            ...days,
            [other[0]]: day.metrics
        })
    }  
    useEffect(() => {
    daySet()
    },[days])


 useEffect(() =>{
    setNewData({
        data: {
            labels:['Sun', 'Mon', 'Tue','Wed','Thur','Friday','Sat'],
            datasets: [
              {
                label: "Cards Correct",
                data: [ days.Sun.cardsCorrect, days.Mon.cardsCorrect, days.Tues.cardsCorrect, days.Wed.cardsCorrect, days.Thu.cardsCorrect, days.Fri.cardsCorrect, days.Sat.cardsCorrect],
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
            ]
          }
    })
 }, [days])

  

    const test = e => {
        // console.log(abr);
        console.log(days);
    }
   

    return (
        <div>
            <div className="chart-container">
                <button onClick={test}>Test</button>
                <select id="chartType">
                    <option value="bar">Bar</option>
                    <option value="line">Line</option>
                    <option value="pie">Pie</option>
                    <option value="doughnut">Doughnut</option>
                </select>

               <Bar data={newData.data} width={100} height={50}/>
            </div>
        </div>
    )
}

export default UserMetrics;
