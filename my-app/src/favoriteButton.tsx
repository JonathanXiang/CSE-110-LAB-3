import React, { useState, useEffect, useContext } from 'react';
import { LikeContext, likeColors } from './likeColors';
import {themes} from './themeContext'

interface Props {
    isFavorite: boolean;
    toggleFavorite: () => void;
    theme: {foreground: string; background: string};
}

export function FavoriteButton({ isFavorite, toggleFavorite, theme}: Props) {
    const [like, setLike] = useState(likeColors.unliked);
    const toggleLike = () => {
        setLike(like === likeColors.unliked ? likeColors.liked : likeColors.unliked);
        toggleFavorite();
    };
    // useEffect(() => {
    //     document.title = `like is ${like.background}`;
    //   }, [like]);
    
    const imgSrc = (theme === themes.light ? '/emptyHeart.png' : '/emptyHeartDark.png');

    return (
        
        
            <button onClick={toggleLike} className='heartButton'>
            <img className = 'likeButton' src={imgSrc} style={{ background: like.background}}></img>
            </button>
        
        
    );
}

