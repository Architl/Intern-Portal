import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    axios
      .get('https://intern-portal-backend-j2i4.onrender.com/api/intern')
      .then((res) => {
        if (res.data.length > 0) {
          setIntern(res.data[0]); // Show only the first intern
        }
      })
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Intern Dashboard</h2>
        {intern ? (
          <>
            <div className="mb-3">
              <strong>Name:</strong> {intern.name}
            </div>
            <div className="mb-3">
              <strong>Referral Code:</strong> {intern.referralCode}
            </div>
            <div className="mb-3">
              <strong>Total Donations:</strong> ₹{intern.totalDonations}
            </div>

            <h4 className="mt-4">🎁 Rewards / Unlockables</h4>
            <ul className="list-group">
              <li className="list-group-item">🎉 ₹1,000 - Sticker Pack</li>
              <li className="list-group-item">🎁 ₹5,000 - Branded T-shirt</li>
              <li className="list-group-item">🏆 ₹10,000 - Certificate + Swag Box</li>
            </ul>
          </>
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
