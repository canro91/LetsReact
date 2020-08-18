import React from 'react';
import style from './recipe.module.css'

const Recipe = ({recipe}) => {
return(
    <div className={style.recipe}>
        <h2>{recipe.label}</h2>
        <p>{recipe.calories}</p>
        <img className={style.image} src={recipe.image} />
        <ul>
            {recipe.ingredientLines.map((t, index) => (<li key={index}>{t}</li>))}
        </ul>
        <a href={recipe.url}>More...</a>
    </div>
)
};

export default Recipe