import classes from './profile-card.module.css'
import React, {useState} from "react";

const ProfileCard = ({title, text, currentLikes}) => {
    const [counter, changeCounter] = useState(currentLikes)
    const [state, setState] = useState(false)
    const [likeState, setLikeState] = useState("Like")

    const like = () => {
        if(state === true) {
            changeCounter(counter => counter - 1)
            setState(false)
            setLikeState("Like")
            return
        }

        changeCounter(counter => counter + 1)
        setState(true)
        setLikeState("Unlike")
    }

    const changeColor = () => {
        return state? "red" : "darkseagreen"
    }

    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            <div className={classes.textInfo}>{text}</div>
            <div className={classes.likes}>Likes: {counter}</div>
            <div id='id' className={classes.button} onClick={like} style={{backgroundColor: changeColor() }}>{likeState}</div>
        </div>
    )
}

export default ProfileCard