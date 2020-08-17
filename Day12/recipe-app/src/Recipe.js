import React from 'react';

const Recipe = ({recipe}) => {
return(
    <div>
        <h2>{recipe.label}</h2>
        <p>{recipe.calories}</p>
        <img src={recipe.image} alt=""/>
        <ul>
            {recipe.ingredientLines.map((t, index) => (<li key={index}>{t}</li>))}
        </ul>
        <a href={recipe.url}>More...</a>
    </div>
)
};

export default Recipe