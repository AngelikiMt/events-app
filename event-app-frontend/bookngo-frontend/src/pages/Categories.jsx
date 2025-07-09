import { useState, useEffect } from 'react';
import { getEventsByCategory } from '../api/events';
import { Link } from 'react-router-dom';


function Categories() {
  const [selected, setSelected] = useState('');
  const [events, setEvents] = useState([]);

  const categories = ['MUSIC', 'SPORTS', 'CULTURE', 'FOOD', 'ARTS', 'EDUCATION', 'ENTERTAINMENT'];

  useEffect(() => {
    if (selected) {
      getEventsByCategory(selected)
        .then(res => setEvents(res.data))
        .catch(console.error);
    } else {
      setEvents([]);
    }
  }, [selected]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Search by Category</h2>

      <div className="mb-4 text-center">
        <select className="form-select w-auto mx-auto" value={selected} onChange={e => setSelected(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="row g-4">
        {events.map(event => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={event._id}>
            <div className="card h-100 shadow-sm">
              <img src={event.imageUrl} className="card-img-top" style={{ height: 180, objectFit: 'cover' }} alt={event.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{event.title}</h5>
                <p className="text-muted">{event.city} | {event.category}</p>
                <Link to={`/events/id/${event._id}`} className="btn btn-outline-warning mt-auto">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-primary">Back to Home</Link>
      </div>
      <br/>
      <br/>
    </div>
  );
}

export default Categories;
