import MovieCreateForm from '../../../components/movieCreateForm';
import { createMovie, getMovieById, updateMovie } from '../../../actions';
import * as React from 'react';
import Router from 'next/router';

class EditMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    movie: {
      name: '',
      description: '',
      rating: '',
      image: '',
      cover: '',
    },
  };
  // static getInitialProps({ query }) {
  //   return { query };
  // }
  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);
    return { movie };
  }

  // componentDidMount() {
  //   const { id } = this.props.query;
  //   getMovieById(id).then((movie) => {
  //     this.setState({ movie });
  //   });
  // }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
      Router.push('/movies/[id]', `/movies/${movie.id}`);
    });
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm submitButton="UPDATE" initialData={movie} handleFormSubmit={this.handleUpdateMovie} />
      </div>
    );
  }
}

export default EditMovie;
