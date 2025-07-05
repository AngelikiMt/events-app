import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEventById, updateEvent } from '../api/events';

function EditEvent() {
    const cityOptions = ['ATHENS', 'THESSALONIKI', 'PATRA', 'LARISSA'];
    const categoryOptions = ['MUSIC', 'SPORTS', 'CULTURE', 'FOOD', 'ARTS', 'EDUCATION', 'ENTERTAINMENT'];

    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      title: '', description: '', city: '', category: '', imageUrl: '', date: '', location: ''
    });

    useEffect(() => {
        getEventById(id)
        .then(res => setFormData(res.data))
        .catch(console.error);
    }, [id]);

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        updateEvent(id, formData)
        .then(() => navigate(`events/id/${id}`))
        .catch(console.error);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Edit Event</h2>
    `        <form onSubmit={handleSubmit}> {/* Same form inputs as AddEvent */} 
                <div className="row g-3">
                    <div className="col-md-6">    
                        <input className="form-control" name="title" value={formData.title} onChange={handleChange}></input>
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
                        <input className="form-control" name="date" value={formData.date?.slice(0,10)} onChange={handleChange}></input>
                    </div>
                    <div className="col-12">    
                        <input className="form-control" name="location" value={formData.location} onChange={handleChange}></input>
                    </div>
                    <div className="col-12">    
                        <input className="form-control" name="imageUrl" value={formData.imageUrl} onChange={handleChange}></input>
                    </div>
                    <div className="col-12">    
                        <textarea className="form-control" name="description" value={formData.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12">    
                        <button className="btn btn-success">Update Event</button>
                    </div>
                </div>
            </form>
`       </div>
    );
}

export default EditEvent;