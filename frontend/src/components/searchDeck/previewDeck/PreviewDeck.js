import React, { useEffect } from "react";
import "./PreviewDeck.scss";
import { firestore } from "../../../App";
import firebase from "firebase";
import axios from "axios"

export default function PreviewDeck(props) {

    const close = e => {
        e.preventDefault();
        props.setPreview(false);
    }

    // useEffect(() => {
    //     axios
    //     .get(
    //       `https://flashcards-be.herokuapp.com/PublicDecks/9FXHWnjdr0TLg3BsUp7n`
    //     )
    //     .then(res => {
    //       console.log(res);
    //     });
    // }, [props.selection])

    return (
        <div className="pr-container">
            <div className="pr-content">
                <button onClick={close}>X</button>
                <h1> {props.selection.deckName} </h1>
                
            </div>
        </div>
    )
}