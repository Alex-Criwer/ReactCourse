import React, {useState} from "react";
import CommentCard from "../comment-card/comment-card"
import classes from './profile-card.module.css'
import comments from "../../assets/comments.json"

const ProfileCard = ({articleId: Id, title, text, currentLikes, currentComments}) => {
    const [counter, changeCounter] = useState(currentLikes)
    const [counterComments, changeCounterComments] = useState(currentComments)
    const [state, setState] = useState(false)
    const [commentState, setCommentState] = useState(false)

    const like = () => {
        if (state === true) {
            changeCounter(counter => counter - 1)
            setState(false)
            return
        }

        changeCounter(counter => counter + 1)
        setState(true)
    }

    const comment = () => {
        if (commentState === true) {
            setCommentState(false)
            return
        }
        setCommentState(true)
    }

    const buttonColor = state ? "red" : "darkseagreen"


    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            <div className={classes.textInfo}>{text}</div>

            <div className={classes.position}>
                <div>
                    <div className={classes.text}>Likes: {counter}</div>
                    <div className={classes.button} onClick={like} style={{backgroundColor: buttonColor }}>Like</div>
                </div>

                <div>
                    <div className={classes.text}>Comments: {counterComments}</div>
                    <div className={classes.button} onClick={comment}>{commentState ? "Hide" : "Display"}</div>
                </div>
            </div>

            <div className="comment-cards" style={{display: commentState? "block" : "none"}}>
                { comments.map(({author, articleId, text}) => {
                        if (articleId === Id) return <CommentCard author = {author} comment = {text}/>
                    }
                )}
            </div>

        </div>
    )
}

export default ProfileCard