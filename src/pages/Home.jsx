import { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import styles from "./MoviesGrid.module.scss";

export function Home() {
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [topMovies, setTopMovies] = useState([]);

  async function getTopMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
  }
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopMovies(topRatedUrl);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Top Movies:</h2>
      <div className={styles.moviesContent}>
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
}
