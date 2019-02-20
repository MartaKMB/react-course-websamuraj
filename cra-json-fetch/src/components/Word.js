import React from 'react';

const Word = props => (
    <li>słowo po angielsku: <strong>{props.english}</strong>, słowo po polsku: <strong>{props.polish}</strong></li>
)

export default Word;
