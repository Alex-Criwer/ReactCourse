import React from "react";
import classes from './comment-card.module.css'

const CommentCard = ({author, comment}) => {
    return (
        <div className={classes.commentCard}>
            <h3>Сommenter: {author}</h3>
            <div className={classes.textComment}>{comment}</div>
        </div>
    )
}

export default CommentCard