import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import RatingPage from './pages/ratingPage';
import EditPage from './pages/editPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='rating' element={<RatingPage />} />
          <Route path='edit-rating/:id' element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
