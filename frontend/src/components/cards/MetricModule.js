import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2'

import './Module.scss';
import Deck from '../decks/Deck';

const ModuleMetric = (props) => {
const [module, setModule] = useState(true)


const myData = {
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [
        {
          label: "Population",
          data: [`${props.sessionData.cardsCorrect}`, `${props.sessionData.cardsIncorrect}`],
          backgroundColor: [
            "#f58d39",
            "#ffd164"
          ]
        }
      ]
    }
  };

   return (
       <div className="outer-container">
         <div className="inner-content">

          <h2> You Scored: {((props.sessionData.cardsCorrect / props.sessionData.cardsStudied) * 100).toFixed()}%</h2>

        <Doughnut data ={myData.data} width={100}
        height={50} />

           <div className="module-btn-container">
          <button className="module-btns">Dashboard</button>
          <button className="module-btns">Metrics</button>
          </div>
         </div>
       </div>
   )

} 


export default ModuleMetric