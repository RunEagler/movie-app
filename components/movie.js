import Link from 'next/link';

const Movie = ({ movie }) => {
  const shorten = (text) => {
    if (text && text.length > 200) {
      return text.substr(0, 200) + '...';
    }
    return text;
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
          <a href="#">
            <img className="card-img-top" src={movie.image} alt="" />
          </a>
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
              <a href="#">{movie.name}</a>
            </Link>
          </h4>
          <p className="movie-genre">{movie.genre}</p>
          <h5>$24.99</h5>
          <p className="card-text">{shorten(movie.description)}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{movie.rating}</small>
        </div>
      </div>
    </div>
  );
};

export default Movie;
