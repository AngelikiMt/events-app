import { useState } from 'react';
import { postEvent } from '../api/events';
import { useNavigate, Link } from 'react-router-dom';

function AddEvent() {
    const cityOptions = ['ATHENS', 'THESSALONIKI', 'PATRA', 'LARISSA'];
    const categoryOptions = ['MUSIC', 'SPORTS', 'CULTURE', 'FOOD', 'ARTS', 'EDUCATION', 'ENTERTAINMENT'];

    const [formData, setFormData] = useState({
        title: '', description: '', city: '', category: '', imageUrl: '', date: '', location: ''
    });

    const navigate = useNavigate();

    const handleChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        postEvent(formData)
        .then(() => navigate('/events'))
        .catch(console.error);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center"> Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input className="form-control" name="title" placeholder="Title" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <select className="form-select" name="city" value={formData.city} onChange={handleChange} required>
                            <option value="">Select City</option>
                            {cityOptions.map(city => (
                            <option key={city} value={city}>{city}</option>
                            ))}
                        </select>          
                    </div>
                    <div className="col-md-6">
                        <select className="form-select" name="category" value={formData.category} onChange={handleChange} required>
                            <option value="">Select Category</option>
                            {categoryOptions.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>                    
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" name="date" type="date" onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <input className="form-control" name="location" placeholder="Location" onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <input className="form-control" name="imageUrl" placeholder="Image URL" onChange={handleChange} />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" name="description" placeholder="Description" onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success">Submit Event</button>
                    </div>
                </div>
            </form>

            {/* Back to Home Button */}
            <div className="text-center mt-4">
                <Link to="/" className="btn btn-outline-primary">Back to Home</Link>
            </div>
        </div>
    );
}

export default AddEvent;
