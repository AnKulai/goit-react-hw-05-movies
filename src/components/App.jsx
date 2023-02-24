import { Route, Routes } from 'react-router-dom';
import { StyledMain } from './Custom/CustomMain/CustomMain.styled';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const LazyHomePage = lazy(() => import('pages/Home/HomePage'));
const LazyCustomHeader = lazy(() =>
  import('./Custom/CustomHeader/CustomHeader')
);
const LazyCustomContainer = lazy(() =>
  import('./Custom/CustomContainer/CustomContainer')
);
const LazyMovieDetailsPage = lazy(() =>
  import('pages/MovieDetails/MovieDetailsPage')
);
const LazyMovieNavigation = lazy(() =>
  import('./MovieNavigation/MovieNavigation')
);
const LazyMovieSearchPage = lazy(() =>
  import('pages/MovieSearch/MovieSearchPage')
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <LazyCustomHeader>
          <LazyCustomContainer>
            <LazyMovieNavigation />
          </LazyCustomContainer>
        </LazyCustomHeader>
      </Suspense>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <LazyCustomContainer>
            <Routes>
              <Route path="/" element={<LazyHomePage />}></Route>
              <Route
                path="/movies/:movieId/*"
                element={<LazyMovieDetailsPage />}
              ></Route>
              <Route path="/movies" element={<LazyMovieSearchPage />}></Route>
            </Routes>
          </LazyCustomContainer>
        </Suspense>
      </StyledMain>
    </>
  );
};
