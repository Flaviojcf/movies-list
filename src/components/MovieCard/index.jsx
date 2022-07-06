import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export function MovieCard({ movie, isShowLink=true }) {
  const imageUrl = import.meta.env.VITE_IMG;

  return (
    <div className="movieCard">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {isShowLink && <Link to={`/movies${movie.id}`}>More information</Link>}
    </div>
  );
}
