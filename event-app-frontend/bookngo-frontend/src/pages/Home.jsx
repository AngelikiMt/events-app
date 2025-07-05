import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4"> Welcome to BookNGo!</h1>
            <p className="lead mb-5">Discover and book events in Greece with ease!</p>
            <div className="row justify-content-center g-4">
                <div className="col-6 col-md-3">
                    <Link to="/events" className="btn btn-primary w-100">Browse All Events</Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to="/events/post" className="btn btn-success w-100">Create New Event</Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to="/events/categories" className="btn btn-warning w-100">Search By Category</Link>
                </div>
                <div className="col-6 col-md-3">
                    <Link to="/events/cities" className="btn btn-info w-100">Search By City</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;