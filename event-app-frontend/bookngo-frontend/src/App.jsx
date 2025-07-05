import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';
import Categories from './pages/Categories';
import Cities from './pages/Cities';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/id/:id" element={<EventDetail />} />
        <Route path="/events/post" element={<AddEvent />} />
        <Route path="/events/edit/:id" element={<EditEvent />} />
        <Route path="/events/categories" element={<Categories />} />
        <Route path="/events/cities" element={<Cities />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
