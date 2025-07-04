import React from 'react'
const stats = [
    { number: "3,000", description: "VA's hired and placed" },
    { number: "163,000", description: "projects completed" },
    { number: "2.3 million", description: "hours saved" },
  ];

const Statistics = () => {
   return (
    <div className="bg-blue-600 p-8 text-white rounded-lg text-left">
      {stats.map((stat, index) => (
        <div key={index} className="mb-4">
          <p className="text-xl font-bold">
            More than <span className="text-yellow-400">{stat.number}</span>
          </p>
          <p>{stat.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics