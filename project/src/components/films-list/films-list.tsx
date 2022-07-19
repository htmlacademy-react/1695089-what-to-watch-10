import Film from '../film/film';
import { FilmsType } from '../../types/films';
import {useState} from 'react';

type FilmsListProps = {
  films: FilmsType[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [filmActive, setFilmActive] = useState({
    id: '',
  });

  return (
    <div className="catalog__films-list">
      {films.map((film) => <Film picture={film.picture} title={film.title} key={film.id} id={film.id} />)}
    </div>
  );
}

export default FilmsList;
