import React from 'react';

export const likeColors = {
 unliked: {
   background: '#f9f9f9',
 },
 liked: {
   background: '#ff0000',
 },
};

export const LikeContext = React.createContext(likeColors.unliked);