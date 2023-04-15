import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsPage, HomePage, SearchPage } from '../pages';
import { Navigation } from '../components';

export const AppRouter =() => {
  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path='details/:id' element={<DetailsPage />} />
        <Route path='search' element={<SearchPage />} />
    </Route>
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
  );
}