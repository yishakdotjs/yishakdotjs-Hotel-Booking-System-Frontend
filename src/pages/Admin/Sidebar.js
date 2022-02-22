import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            <i className="fas fa-user mr-2"></i>
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/rooms" className="nav-link">
            <i className="fas fa-hotel mr-2"></i>
            Rooms
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/booking" className="nav-link">
            <i className="fas fa-save mr-2"></i>
            Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/payment" className="nav-link">
            <i className="fas fa-money-bill-wave mr-2"></i>
            Payments
          </Link>
        </li>
      </ul>

      {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Saved reports</span>
        <a className="link-secondary" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6> */}
    </div>
  );
}

export default Sidebar;
