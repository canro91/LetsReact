const searchMovies = (query) => {
    return fetch(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'False')
                    throw data.Error;

                return data.Search;
            });
};

export {
    searchMovies
}