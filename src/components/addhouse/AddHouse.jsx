import React, { useState } from "react";
import "./AddHouse.css";

const AddHouse = () => {
  const [formData, setFormData] = useState({
    saleOrRent: "",
    propertyName: "",
    address: "",
    area: "",
    propertyType: "",
    priceRange: { min: "", max: "" },
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      priceRange: {
        ...formData.priceRange,
        [name]: value,
      },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("House details submitted successfully!");
  };

  return (
    <section className='addhouse mb'>
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Add House Details</h2>

        {/* Sale or Rent Dropdown */}
        <div className="form-group">
          <label htmlFor="saleOrRent">For Sale or Rent</label>
          <select
            name="saleOrRent"
            id="saleOrRent"
            value={formData.saleOrRent}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Sale">For Sale</option>
            <option value="Rent">For Rent</option>
          </select>
        </div>

        {/* Property Name */}
        <div className="form-group">
          <label htmlFor="propertyName">Property Name</label>
          <input
            type="text"
            id="propertyName"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            placeholder="Enter property name"
            required
          />
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </div>

        {/* Area in Square Feet */}
        <div className="form-group">
          <label htmlFor="area">Area (Square Feet)</label>
          <input
            type="number"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter area in sq ft"
            required
          />
        </div>

        {/* Property Type */}
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <input
            type="text"
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            placeholder="E.g., Apartment, Villa"
            required
          />
        </div>

        {/* Price Range */}
        <div className="form-group">
          <label>Price Range (in USD)</label>
          <div className="price-range">
            <input
              type="number"
              name="min"
              value={formData.priceRange.min}
              onChange={handlePriceRangeChange}
              placeholder="Min Price"
              required
            />
            <input
              type="number"
              name="max"
              value={formData.priceRange.max}
              onChange={handlePriceRangeChange}
              placeholder="Max Price"
              required
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label htmlFor="image">Upload Property Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
    </section>
  );
};

export default AddHouse;
