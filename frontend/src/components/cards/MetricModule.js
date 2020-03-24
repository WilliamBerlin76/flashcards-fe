import React,{useState} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useHistory } from 'react-router-dom'
import './Module.scss';
import Deck from '../decks/Deck';

const ModuleMetric = (props) => {

    let history = useHistory()
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

          <h2> You Scored <br/><span>{((props.sessionData.cardsCorrect / props.sessionData.cardsStudied) * 100).toFixed()}% </span></h2>
         <div className="doughnut-container">
        <Doughnut data ={myData.data} width={100}
        height={50} />
        </div>
         <h2 className="total-txt">Total Cards Studied {props.sessionData.cardsStudied}</h2>
           <div className="module-btn-container">
          <button className="module-btns" onClick={(e)=>{e.preventDefault(); history.push('/dashboard')}}>Dashboard</button>
          <button className="module-btns">Metrics</button>
          </div>
         </div>
       </div>
   )

} 


export default ModuleMetric