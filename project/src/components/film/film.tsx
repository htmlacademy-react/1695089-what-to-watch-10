import { generatePath, Link } from 'react-router-dom';
import {AppRoute} from '../../const';

interface IFilmProps {
  id: string,
  picture: string,
  title: string,
  setActive: React.Dispatch<React.SetStateAction<string | null >>,
  filmActive: string | null
}

function Film({picture, title, id, setActive, filmActive}: IFilmProps): JSX.Element {

  const handleMouseEnter = () => {
    setActive(id);
    // eslint-disable-next-line no-console
    console.log(filmActive);
  };

  const handleMouseLeave = () => {
    setActive(null);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={picture} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={generatePath(AppRoute.Movie, { id: `${id}` })}>{title}</Link>
      </h3>
    </article>
  );
}

export default Film;
