const Rating = require('../model/rating');

const getAllRating = async (req, res) => {
    try {
      const ratings = await Rating.find();
  
      res.status(200).json(ratings);
    } catch (error) {
      console.error('Error fetching rating:', error);
      res.status(500).json({ message: "Server error" });
    }
};

const getRating = async (req, res) => {
    try {
      const { id } = req.params;
      const ratings = await Rating.findById(id);
  
      res.status(200).json(ratings);
    } catch (error) {
      console.error('Error fetching rating:', error);
      res.status(500).json({ message: "Server error" });
    }
};

const ratingSubmit = async (req, res) => {
    try {
      const { name, product, rating, reviews } = req.body;
  
      if (!name || !product || !rating || !reviews) {
        return res.status(400).json({ message: "All fields are required." });
      }
  
      const newRating = new Rating({
        name,
        product,
        rating,
        reviews,
      });
  
      await newRating.save();
  
      res.status(201).json({ message: "Rating submitted successfully!", rating: newRating });
    } catch (error) {
      console.error("Error submitting rating:", error);
      res.status(500).json({ message: "Internal server error." });
    }
};

const updateRating = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, product, rating, reviews } = req.body;
  
      const existingRating = await Rating.findById(id);
      if (!existingRating) {
        return res.status(404).json({ message: "Rating not found." });
      }
  
      if (name) existingRating.name = name;
      if (product) existingRating.product = product;
      if (rating) existingRating.rating = rating;
      if (reviews) existingRating.reviews = reviews;
  
      await existingRating.save();
  
      res.status(200).json({ message: "Rating updated successfully!", rating: existingRating });
    } catch (error) {
      console.error("Error updating rating:", error);
      res.status(500).json({ message: "Internal server error." });
    }
};

const deleteRating = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({ message: "Invalid ID provided." });
      }
  
      const existingRating = await Rating.findByIdAndDelete(id);
      if (!existingRating) {
        return res.status(404).json({ message: "Rating not found." });
      }
  
      res.status(200).json({ message: "Rating deleted successfully!" });
    } catch (error) {
      console.error("Error deleting rating:", error.stack);
      res.status(500).json({ message: "Internal server error." });
    }
};


module.exports = { getAllRating, getRating, ratingSubmit, updateRating, deleteRating };