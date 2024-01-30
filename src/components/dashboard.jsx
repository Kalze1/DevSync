import React, { useState, useEffect } from 'react';

function DashboardPage() {
  const [data, setData] = useState([]); // Example data state

  // Fetch data when the component mounts (can be replaced with actual data source)
  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="dashboard-page">
      <h1>My Dashboard</h1>
      <div className="data-panel">
        <h3>Sales Overview</h3>
        <p>Total Sales: {data.totalSales}</p>
        <Chart data={data.salesBreakdown} /> // Insert your chart component here
      </div>
      <div className="data-panel">
        <h3>Top Products</h3>
        <ul>
          {data.topProducts.map((product) => (
            <li key={product.id}>{product.name}: {product.sales}</li>
          ))}
        </ul>
      </div>
      <div className="data-panel">
        <h3>Recent Activity</h3>
        <ul>
          {data.recentActivity.map((activity) => (
            <li key={activity.id}>{activity.message} - {activity.timestamp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Example Chart component (needs implementation)
function Chart(props) {
  // ... render your chart based on props.data ...
}

export default DashboardPage;
