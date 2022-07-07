import styles from "./Movie.module.scss";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

export function Movie() {
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  }
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovies(movieUrl);
  }, []);

  return (
    <div className={styles.moviePage}>
      {movie && (
        <>
          <MovieCard className={styles.movieCard} movie={movie} isShowLink={false} />
          <p className={styles.tagLine}>{movie.tagline}</p>
          <div className={styles.info}>
            <h3>
              <BsWallet2 /> Budget:
            </h3>
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movie.budget)}
            </p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsGraphUp /> Revenue:
            </h3>
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movie.revenue)}
            </p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsHourglassSplit /> Duration:
            </h3>
            <p>{movie.runtime} minutes</p>
          </div>
          <div className={styles.info}>
            <h3>
              <BsFillFileEarmarkTextFill /> Description:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
}
