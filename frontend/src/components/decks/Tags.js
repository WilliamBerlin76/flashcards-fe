import React, {useState} from "react";
import {TextField, Input} from '@material-ui/core'; 


const Tags = props => {
    const [tags, setTags] = useState([])


        //TAGS
        const addTags = event => {
            if (event.key === "Enter" && event.target.value !== "") {
                setTags([...tags, event.target.value]);
                props.selectedTags([...tags, event.target.value])
                event.target.value = "";
            }
        };
    
        const removeTags = index => {
            setTags([...tags.filter(tag =>
                tags.indexOf(tag) !== index)
            ])
        }


        return(
        <div>
            <ul>
            {tags.map((tag, index) => (
                <li key = {index}>
                    <span>{tag}</span>
                    <i
                        onClick = {() => removeTags(index)}
                    >
                        close
                    </i>

                </li>
            ))}
            </ul>
                <TextField label = "Tags">
                <input
                    type = "text"
                    placeholder = "Press enter to add tags"
                    onKeyUp = {event => addTags(event)}
                />
                </TextField>
        </div>

)

};


export default Tags;