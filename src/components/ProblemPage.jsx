import React from 'react';
import { useParams } from 'react-router-dom';

const ProblemPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Problem {id}</h1>
      {/* Your problem content goes here */}
    </div>
  );
};

export default ProblemPage;