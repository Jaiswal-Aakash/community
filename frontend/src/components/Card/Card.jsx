import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import './Card.css'

const Card = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="menu-container">
      <h1 className="menu-title">Categories</h1>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <div
              className="category-name"
              onClick={() => toggleExpand(category.id)}
            >
              {category.name}
              <span className="toggle-icon">
                {expandedCategory === category.id ? "-" : "+"}
              </span>
            </div>
            {expandedCategory === category.id && (
              <ul className="subcategory-list">
                {category.subcategories.length > 0 ? (
                  category.subcategories.map((sub) => (
                    <li key={sub.id} className="subcategory-item">
                      {sub.name}
                    </li>
                  ))
                ) : (
                  <li className="no-subcategory">No Subcategories</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
