import React from 'react';

const Card = ({ heading, date, tags, description }) => {
  return (
    <div className="card">
      <p className="mb-lg">{new Date(date).toDateString()}</p>
      <h3 className="mb-md">{heading}</h3>
      
      <div className="mb-sm">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tags"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};

export default Card;