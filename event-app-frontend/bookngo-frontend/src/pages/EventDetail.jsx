import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventById } from '../api/events';

function EventDetail() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getEventById(id)
        .then(res => setEvent(res.data))
        .catch(console.error);
    }, [id]);

    if (!event) return <p className="text-center">Loading event...</p>;

    return (
        <div className="container mt-4">
            <div className="card">
                <img src={event.imageUrl} className="card-img-top" alt={event.title}/>
                <div className="card-body">
                    <h3 className="card-title">{event.title}</h3>
                    <p className="card-text">{event.description}</p>
                    <p><strong>City:</strong> {event.city}</p>
                    <p><strong>Category:</strong> {event.category}</p>
                    <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Created At:</strong> {new Date(event.createdAt).toLocaleDateString()}</p>
                    <br/>
                    <p><strong>Views:</strong> {event.viewCount}</p>

                    <hr/>
                    <Link to={`/edit/${event._id}`} className="btn btn-outline-warning mt-3">Edit Event</Link>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default EventDetail;