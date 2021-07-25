import { Link } from 'react-router-dom';
import './movie.css';

export default function Movies({movie}) {
    const base_img = 'https://image.tmdb.org/t/p/w300';

    return(
        <Link to={"/movie-detail/" + movie.id}><article className="movie-card">
          <div><img src={base_img + movie.poster_path} alt="Poster de la película"></img></div>
          <div>{movie.title}</div>
        </article></Link>
    )
}