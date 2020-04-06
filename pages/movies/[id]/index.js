import { useRouter } from 'next/router';
import { deleteMovie, getMovieById } from '../../../actions';
import Link from 'next/link';

const MovieDetail = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(router.query);

  const handleDelete = (id) => {
    deleteMovie(id).then(() => {});
    router.push('/');
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
        <button className="btn btn-danger btn-lg mr-1" role="button" onClick={handleDelete}>
          Delete
        </button>
        <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
          <button className="btn btn-warning btn-lg mr-1" role="button">
            Edit
          </button>
        </Link>
      </div>
      <p>Some description about the movie</p>
    </div>
  );
};

MovieDetail.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return { movie };
};

export default MovieDetail;
