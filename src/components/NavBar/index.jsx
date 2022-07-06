import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import styles from "./styles.module.scss";
import { useState } from "react";

export function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch('')

  }
  

  return (
    <nav className={styles.container}>
      <h1>
        <Link to="/">
          <BiCameraMovie />
          MoviesLib
        </Link>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a movie"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
