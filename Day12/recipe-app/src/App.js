import React from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = 'beb1f1c4';
  const APP_KEY = '71c20a19f12d0d6364df3629031f9667';

  const [search, setSearch] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);
  const [query, setQuery] = React.useState('chicken');

  React.useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    fetch(request)
      .then(response => response.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
      });
  };

  const onSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={onSearch}>
        <input className="search-bar" type="text" value={search} onChange={e => setSearch(e.currentTarget.value)} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe.label} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
