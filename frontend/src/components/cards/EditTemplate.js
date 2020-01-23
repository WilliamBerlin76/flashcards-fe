import React from 'react';
// import React, { useEffect, useState } from 'react';

import Loader from 'react-loader-spinner';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Segment, Header, Checkbox } from 'semantic-ui-react'
import './Cards.scss';
// import './DeckList.scss';

class EditTemplate extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        if (!this.props.card) {
            
            return    (       
            <div className = "loader">

            <Loader type="ThreeDots" color="#F66E00" height={80} width={80} />

            </div>
            )
        }  else {
        return(
            <div className = "container">

                <div className = "cardList"> 
            
                        <div className = "cardData ">
                            <Segment>
                            <div className = "cardTop">
                            <Header as='h5'className = "header">Front</Header>
                            <Checkbox className = "check"/>
                            </div>
                             <h3 className = "term" onClick = {this.handleClick}>{this.props.card.front}</h3>

                            <Divider clearing />

                            <Header as='h5' className = "header">Back</Header>     
                                 <h3 className = "defination" onClick = {this.handleClick}>{this.props.card.back}</h3>
                        </Segment>
                        <button>Hryyy</button>
                        </div>
            
                        

                    
                </div>

            
                {/* <div className = "button">
                <button className = "delete" onClick = {this.handledelete}>Delete</button>
                </div> */}
                
            </div>

//     )
// };


)
}
}
};

export default EditTemplate;