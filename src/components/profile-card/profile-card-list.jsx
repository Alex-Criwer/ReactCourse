import React from "react";
import ProfileCard from './profile-card'

export default function ProfileCardList({cards}) {
    return (
        <ul>
            {cards.map(it => <ProfileCard
                title={it.title}
                text={it.text}
                currentLikes={it.currentLikes}
            />)}
        </ul>
    )
}