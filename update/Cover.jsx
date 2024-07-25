import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RequestPage from './RequestPage';
import PendingPage from './PendingPage';
import RejectedPage from './RejectedPage';
import ApprovedPage from './ApprovedPage';
import ChangePasswordPage from './ChangePasswordPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li><Link to="/request" className="text-white">Request</Link></li>
            <li><Link to="/pending" className="text-white">Pending</Link></li>
            <li><Link to="/rejected" className="text-white">Rejected</Link></li>
            <li><Link to="/approved" className="text-white">Approved</Link></li>
            <li><Link to="/change-password" className="text-white">Change Password</Link></li>
         
          </ul>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/request" element={<RequestPage />} />
            <Route path="/pending" element={<PendingPage />} />
            <Route path="/rejected" element={<RejectedPage />} />
            <Route path="/approved" element={<ApprovedPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
