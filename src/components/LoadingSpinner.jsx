import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({ size = 'md', variant = 'primary', text = 'Loading...' }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <Spinner 
        animation="border" 
        variant={variant}
        size={size}
        role="status"
        aria-hidden="true"
      />
      <span className="mt-2 text-muted">{text}</span>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;