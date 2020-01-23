import React, { useEffect, useState } from 'react';
import EditTemplate from './EditTemplate';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Form, Input, Divider, Icon, Grid, Search} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { getCards } from '../../actions';
import poly from '../../assets/poly.png';
import { useHistory } from 'react-router-dom';
import './Cards.scss';

const Cards = props => {
    const [currentCard, setCurrentCard] = useState(0)
    const [newName, setNewName] = useState({deckName: ''});
    const [editDeck, setEditDeck] = useState([
        {    front: '', back: ''}
    ]);
    

    useEffect(() => {
        console.log(props.match.params.deckName)
        props.getCards(props.match.params.deckName);
    }, []);

    let history = useHistory();
    const handleChanges = (index, e) => {

        setEditDeck({
            ...editDeck,
            [e.target.name]: e.target.value
        })
    }
     const handleName = e => {
            console.log(editDeck, newName)
            setNewName({
                ...newName,
                [e.target.name] : e.target.value
            })
        };

    const handleSubmit = e => {
        console.log(editDeck, newName)
        e.preventDefault()
        props.updateDeck(editDeck, newName)
    };

    if (!props.cards) {
        return(
            <div className = "loading-background">
            <h1 className = "deckName">{props.match.params.deckName}</h1>
        <div className = "loader">
          
                
                <Loader type="ThreeDots" color="#F66E00" height={80} width={80} />
              
        </div>
        </div>
        ) 
    } else {

        
    return(

        <div className = "page">
           <div className = "loading-background">
           <img className = "back"src = {poly} onClick ={() => history.goBack()}/>
            <h1 className = "deckName">Edit Deck</h1>
            <div className= "cardnum">
                <h4 className = "card-length">{props.cards.length}</h4>
                {/* <img className = "smile" src = {smiley} alt = {'a smiling emoji'}/> */}
                <h4 className = "Total-Cards">Total Cards</h4>
             </div>
            </div>


            <div>
             <div className = "topSection">
                <div className = "subtitle">
                    <h2>Deck Info</h2>
                    <h1>...</h1> 
                </div>  

                <Form size={"large"}>
                    <Form.Field >
                    <label>Deck Name</label>
                    <Input
                        type = "text"
                        onChange = {handleName}
                         placeholder = {props.match.params.deckName}
                    />
                    </Form.Field>
                    <Divider />
                </Form>                   
                <div className= "btn2">
                    <button
                            className= "goBack"
                            onClick ={() => props.history.goBack()}
                            onSubmit = {handleSubmit}
                        >
                        <Icon name=" long arrow alternate left"/> Go Back
                        </button>
                        <button
                            className= "save"
                            onClick = {() => props.history.push(`/decklist`)}
                            onSubmit = {handleSubmit}
                        >
                        Save
                        </button>
                        </div>
                </div>
                             
                </div>

                <div className = "middleSection">
                    <h2>Flashcards</h2>
                    <p>Select a card below to edit card content or add a new card</p>
                    <button
                            className= "Add New Card"
                            onClick = {() => props.history.push(`/decklist`)}
                            onSubmit = {handleSubmit}
                        >
                        Add New Card
                    </button>
                </div>
                <div className = "bottomSection">
                
                    <Input size= "large" position = "center"
                         className= "search"
                        icon='search'
                        iconPosition='left'
                        center transparent placeholder='Search for a Card...'
                    /> 
                
                    <div>
                    {props.error && <p>{props.error}</p>}
                        {props.cards.map(card =>(
                        <EditTemplate key = {props.cards.id} card = {card.data} />
                    ))}

                    </div>

                </div>

                <div className= "btn2">
                    <button
                            className= "delete"
                        //     onClick ={() => props.history.goBack()}
                        //     onSubmit = {handleSubmit}
                        >
                         Delete
                        </button>
                        <button
                            className= "archive"
                            // onClick = {() => props.history.push(`/decklist`)}
                            // onSubmit = {handleSubmit}
                        >
                        Archive
                        </button>
                        </div>
        </div>
    )
}
};

const mapStateToProps = (state, props) => {
    return{
        cards: state.cards,
        isFetching: state.isFetching,
        error: state.error,
        
    }
};

export default connect(
    mapStateToProps,
    { getCards }
)(Cards);









































// import React, { useEffect, useState } from 'react';

// import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
// import { getCards } from '../../actions';
// import poly from '../../assets/poly.png';
// import smiley from '../../assets/smiley.png';
// import { useHistory } from 'react-router-dom';
// import EditTemplate from './EditTemplate';
// // import './Cards.scss';

// const EditCard = props => {
//     const [currentCard, setCurrentCard] = useState(0)
//     // const [newName, setNewName] = useState({deckName: ''});
//     // const [editDeck, setEditDeck] = useState([
//     //     {    front: '', back: ''}
//     // ]);

    
//     // useEffect(() => {
//     //     console.log(props.match.params.deckName)
//     //     props.getCards(props.match.params.deckName);
//     // }, []);

//     let history = useHistory();
    
//     // const handleChanges = (index, e) => {

//     //     setEditDeck({
//     //         ...editDeck,
//     //         [e.target.name]: e.target.value
//     //     })
//     // };    
    
//     // const handleName = e => {
//     //     console.log(editDeck, newName)
//     //     setNewName({
//     //         ...newName,
//     //         [e.target.name] : e.target.value
//     //     })
//     // };

//     // // // const handleEdit = () => {
//     // // //     const values = [...editDeck];
//     // // //     values.push({ front: '', back: '' });
//     // // //     setEditDeck(values);
//     // // // };

//     // const handleSubmit = e => {
//     //     console.log(editDeck, newName)
//     //     e.preventDefault()
//     //     props.updateDeck(editDeck, newName)
//     // };

//     if (!props.cards) {
//         return(
//             <div className = "loading-background">
//             <h1 className = "deckName">{props.match.params.deckName}</h1>
//         <div className = "loader">
          
                
//                 <Loader type="ThreeDots" color="#F66E00" height={80} width={80} />
              
//         </div>
//         </div>
//         ) 
//     } else {

        
//     return(

//         <div className = "editing">

//             <img className = "back"src = {poly} onClick ={() => history.goBack()}/>
//             <h1 className = "deckName">Editing</h1>
//             {/* <div className = "loading-background"> */}

//             {/* <h4 className = "listCards">{props.cards.length}</h4> */}
//             <h4 className = "cardsHeader">Total Cards</h4>           

//             <div>
//              {/* <div className = "topSection">
//                     <h3>Deck Info</h3>
//                     <button
//                             onClick ={() => props.history.goBack()}
//                             onSubmit = {handleSubmit}
//                         >
//                         Go Back
//                         </button>
//                         <button
//                             onClick = {() => props.history.push(`/decklist`)}
//                             onSubmit = {handleSubmit}
//                         >
//                         Save
//                         </button>
//                 </div>
//                 <form>
//                     <input
//                         type = "text"
//                         onChange = {handleName}
//                         name = "deckName"
//                         placeholder = "Deck Name" 
//                     />
//                 </form>*/}
//                 </div>
            

//             <div>
//             {props.error && <p>{props.error}</p>}
//                  {props.cards.map(card =>(
//                 <EditTemplate key = {props.cards.id} card = {card.data} />
//             ))}

//             </div>

          

        
//         </div>
//     )
// }
// };

// const mapStateToProps = (state, props) => {
//     return{
//         cards: state.cards,
//         isFetching: state.isFetching,
//         error: state.error,
        
//     }
// };

// export default connect(
//     mapStateToProps,
//     { getCards }
// )(EditCard);
