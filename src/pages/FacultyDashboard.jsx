import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

const FacultyDashboard = () => {
  const data = {
    citationsData: {
      years: ['2020', '2021', '2022'],
      citations: [20, 30, 25]
    },
    publicationsData: {
      years: ['2020', '2021', '2022'],
      publications: [5, 8, 7]
    }
  };

  return (
    <div>
      <Dashboard data={data} />
    </div>
  );
};

export default FacultyDashboard;
