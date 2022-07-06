import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import styles from "./MoviesGrid.module.scss";

export function Search() {
  const searchURL = import.meta.env.VITE_SEARCH;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("q");

  async function getSearchMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  }
  useEffect(() => {
    const searchQuerryUrl = `${searchURL}?${apiKey}&query=${query}`;
    getSearchMovies(searchQuerryUrl);
  }, [query]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Results: <span className={styles.querryText}>{query}</span>
      </h2>
      <div className={styles.moviesContent}>
        {movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
