import React, {useState} from "react";
import TextField from '@material-ui/core/TextField'; 


const Tags = props => {
    const [tags, setTags] = useState([])


        //TAGS
        const addTags = event => {
            event.preventDefault();
            if (event.target.value !== "") {
                setTags([...tags, event.target.value]);
                props.selectedTags([...tags, event.target.value]);
                event.target.value = "";
            }
        };
    
        const removeTags = index => {
            setTags([...tags.filter(tag =>
                tags.indexOf(tag) !== index)
            ])
        }


        return(
        <div className = "tags-input">
      
            <ul id = "tags">
            {tags.map((tag, index) => (
                <li key = {index} className = "tag">
                    <span className = "tag-title">{tag}</span>
                    <span
                        className = "tag-close-icon"
                        onClick = {() => removeTags(index)}
                    >
                        X
                    </span>
                    
                </li>
            ))}
            </ul>
            <input
                    className = "tagss"
                    type = "text"
                    placeholder = "Add tags to make searching easier"
                    onKeyUp = {event => event.key === "Enter" ? addTags(event) : null}
                />


        </div>

)

};


export default Tags;