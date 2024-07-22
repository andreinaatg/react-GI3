import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './movie.css';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

function MovieFinder() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=efc3dba00e9545f5344b02bd88e9f798&query=${query}`)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                    console.log(data.results);
                })
                .catch((error) => console.error("Error fetching movies:", error));
        }
    }, [query]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="container"> 
            <input type="text" className="input" onChange={handleInputChange} value={query} placeholder="Search for a movie..." />
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                keyboard={{ enabled: true }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="movie-slide">
                            <h3>{movie.title}</h3>
                            {movie.poster_path && (
                                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MovieFinder;
