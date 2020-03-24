import React,{useState} from 'react'


import './Module.scss';
import Deck from '../decks/Deck';

const ModuleMetric = (props) => {
const [module, setModule] = useState(true)




   return (
       <div className="outer-container">
         <div className="inner-content">
       <h2>Congratulations!!! You Got {props.sessionData.cardsCorrect} out of {props.deck.legth}</h2>
         </div>
       </div>
   )

} 


export default ModuleMetric