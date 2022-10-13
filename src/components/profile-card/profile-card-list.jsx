import React from "react";
import ProfileCard from './profile-card'

export default function ProfileCardList({cards}) {
    return (
        <ul>
            {cards.map(it => <ProfileCard
                articleId={it.articleId}
                title={it.title}
                text={it.text}
                currentLikes={it.currentLikes}
                currentComments = {it.commentsCount}
            />)}
        </ul>
    )
}