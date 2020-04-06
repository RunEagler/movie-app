import React, { useEffect, useState } from 'react';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import { getCategories, getMovies } from '../actions';

const Home = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [filter, setFilter] = useState('all');
  const changeCategory = (category) => {
    setFilter(category);
  };

  const filterMovies = (movies) => {
    if (filter === 'all') {
      return movies;
    }
    return movies.filter((movie) => movie.genre && movie.genre.includes(filter));
  };

  const { images, movies } = props;
  return (
    <div>
      <div className="home-page">
        :
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu categories={props.categories} changeCategory={changeCategory} activeCategory={filter} />
            </div>
            <div className="col-lg-9">
              <Carousel images={images} />
              <p>Displaying {filter} movies</p>
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <MovieList movies={filterMovies(movies) || []} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name,
  }));
  return { movies, images, categories };
  // setMovies(movies);
};

export default Home;
