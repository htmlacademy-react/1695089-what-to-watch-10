import { Link } from 'react-router-dom';

interface IFilmProps {
  id: string,
  picture: string,
  title: string,
}

function Film({picture, title, id}: IFilmProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={picture} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/movie/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default Film;
