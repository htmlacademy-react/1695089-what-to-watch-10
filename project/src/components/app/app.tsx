import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SingInScreen from '../../pages/sing-in-screen/sing-in-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../components/private-route/private-route';
import { FilmsType } from '../../types/films';

type AppScreenProps = {
  films: FilmsType[];
}

function App({films}: AppScreenProps): JSX.Element {
  const [firstFilm] = films;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen films={films} />}
        />
        <Route
          path={AppRoute.SingIn}
          element={<SingInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Movie}
          element={
            <MovieScreen films={films}/>
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReviewScreen film={firstFilm}/>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen film={firstFilm}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
