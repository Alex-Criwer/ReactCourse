import React, {useState} from "react";
import classes from './profile-card.module.css'

const ProfileCard = ({title, text, currentLikes}) => {
    const [counter, changeCounter] = useState(currentLikes)
    const [state, setState] = useState(false)

    const like = () => {
        if(state === true) {
            changeCounter(counter => counter - 1)
            setState(false)
            return
        }

        changeCounter(counter => counter + 1)
        setState(true)
    }

    const buttonColor = state ? "red" : "darkseagreen"


    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            <div className={classes.textInfo}>{text}</div>
            <div className={classes.likes}>Likes: {counter}</div>
            <div className={classes.button} onClick={like} style={{backgroundColor: buttonColor }}>Like</div>
        </div>
    )
}

export default ProfileCard