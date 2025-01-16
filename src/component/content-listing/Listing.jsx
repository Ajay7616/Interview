import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Listing.css';
import axiosInstance from "../../utils/axiosInstance";

const Listing = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await axiosInstance.get("/api/ratings/");
        setItems(response.data);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, []);

  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      try {
        await axiosInstance.delete(`/api/ratings/delete/${itemId}`);
        alert('Rating deleted successfully!');
        window.location.reload();      
    } catch (error) {
        setError("Error deleting item. Please try again later.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container listing mt-5">
      <h2 className="text-center my-5">Listing Page</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-6 mb-4" key={item._id}>
            <div className="card">
              <img
                src="https://picsum.photos/200"
                className="card-img-top"
                alt={item.product}
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.product}</h5>
                <p className="card-text">
                  <strong>User:</strong> {item.name}
                </p>
                <p className="card-text">
                  <strong>Rating:</strong> {item.rating} ⭐
                </p>
                <p className="card-text">
                  <strong>Review:</strong> {item.reviews}
                </p>
                <div className="d-flex justify-content-between">
                <Link to={`/edit-rating/${item._id}`}>
                    <button className="btn btn-primary">
                        Edit
                    </button>
                </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
