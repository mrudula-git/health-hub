"use client"
import React, { useEffect, useState } from 'react';

const StatisticsSection = () => {
  const FINAL_VALUES = {
    happyCustomers: 1000,
    projectsCompleted: 500,
    satisfactionRate: 99,
  };

  const [statsData, setStatsData] = useState({
    happyCustomers: 0,
    projectsCompleted: 0,
    satisfactionRate: 0,
  });

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setStatsData((prevStats) => ({
        happyCustomers: Math.min(FINAL_VALUES.happyCustomers, prevStats.happyCustomers + 5),
        projectsCompleted: Math.min(FINAL_VALUES.projectsCompleted, prevStats.projectsCompleted + 3),
        satisfactionRate: Math.min(FINAL_VALUES.satisfactionRate, prevStats.satisfactionRate + 1),
      }));
    }, 30);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white z-10'>
      <div className="max-w-screen-lg mx-auto  p-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold">{statsData.happyCustomers}+</h2>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="text-center transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold">{statsData.projectsCompleted}+</h2>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div className="text-center transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold">{statsData.satisfactionRate}%</h2>
            <p className="text-sm">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
