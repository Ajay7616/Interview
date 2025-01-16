import React, { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import './RatingForm.css';

const RatingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    rating: '',
    reviews: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/api/ratings/submit', formData);
      console.log('Submitted Data:', response.data);
      alert('Rating submitted successfully!');
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('An error occurred while submitting the rating.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card rating">
        <div className="card-header text-center">
          <h2>Add a Rating</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="product" className="form-label">Product</label>
              <select
                className="form-control"
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a product</option>
                <option value="Go Cheese">Go Cheese</option>
                <option value="Avalar Whey Protein">Avalar Whey Protein</option>
                <option value="Govardhan Milk">Govardhan Milk</option>
                <option value="Go Butter">Go Butter</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="rating" className="form-label">Rating</label>
              <input
                type="number"
                className="form-control"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Enter rating (0 to 5)"
                min="0"
                max="5"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="reviews" className="form-label">Reviews</label>
              <textarea
                className="form-control"
                id="reviews"
                name="reviews"
                value={formData.reviews}
                onChange={handleChange}
                placeholder="Enter your review"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RatingForm;
