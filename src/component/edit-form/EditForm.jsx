import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import './EditForm.css';
const EditForm = () => {
  const { id } = useParams(); 
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    rating: '',
    reviews: '',
  });
  useEffect(() => {
    const fetchRatingData = async () => {
      try {
        const response = await axiosInstance.get(`/api/ratings/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching rating data:', error);
        alert('Error fetching rating data.');
      }
    };
    if (id) {
      fetchRatingData();
    }
  }, [id]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/api/ratings/update/${id}`, formData);
      console.log('Updated Data:', response.data);
      alert('Rating updated successfully!');
    } catch (error) {
      console.error('Error updating rating:', error);
      alert('An error occurred while updating the rating.');
    }
  };
  return (
    <div className="container mt-5">
      <div className="card rating">
        <div className="card-header text-center">
          <h2>Edit Rating</h2>
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
            <button type="submit" className="btn btn-primary w-100">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditForm;