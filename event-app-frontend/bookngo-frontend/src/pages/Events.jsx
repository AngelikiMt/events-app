import { useEffect, useState } from 'react';
import { fetchEvents } from '../api/events';
import { Link } from 'react-router-dom';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(res => setEvents(res.data))
      .catch(err => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Check All Events!</h2>

      <div className="row g-4">
        {events.map(event => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={event._id}>
            <div className="card h-100 shadow-sm">
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  className="card-img-top"
                  alt={event.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text text-muted">{event.city} | {event.category}</p>
                <p className="card-text small">{new Date(event.date).toLocaleDateString()}</p>
                <Link to={`/events/id/${event._id}`} className="btn btn-primary mt-auto">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <p className="text-center mt-5 text-muted">No events found.</p>
      )}

      {/* Back to Home Button */}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-secondary">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Events;
