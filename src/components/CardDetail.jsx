import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const { title } = useParams();

  return (
    <div className="container mx-auto py-10">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-4xl font-bold mb-4">{decodeURIComponent(title)}</h1>
          <p className="mb-6">
            This is the market prediction and details for <strong>{title}</strong>.
          </p>
          <div className="flex justify-between">
            <button className="btn btn-success">Buy Yes</button>
            <button className="btn btn-error">Buy No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
