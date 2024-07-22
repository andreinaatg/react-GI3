import { useState, useEffect } from "react";

function MovieFinder() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=efc3dba00e9545f5344b02bd88e9f798&query=${query}`)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                    console.log(data.results)
                })
                .catch((error) => console.error("Error fetching movies:", error));
        }
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <>
            <input type="text" className="input" onChange={handleInputChange} value={query} />
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                    {movie.title}
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img> 
                    </li>
                ))}
            </ul>
        </>
    );
}

export default MovieFinder;
