import { createMovie, getCategories, getMovies } from '../actions';
import Home from '../pages';
import Modal from './modal.js';
import MovieCreateForm from './movieCreateForm';
import { useRouter } from 'next/router';

const SideMenu = (props) => {
  const { categories } = props || [];
  const router = useRouter();
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(movies);
      modal.closeModal();
      router.push('/');
    });
  };
  return (
    <>
      <Modal ref={(ele) => (modal = ele)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((category) => (
          <a
            href="#"
            key={category.id}
            onClick={() => props.changeCategory(category.name)}
            className={`list-group-item ${props.activeCategory === category.name ? 'active' : ''}`}
          >
            {category.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default SideMenu;
