import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <Link to="/admin" class="nav-link">
            <i class="fas fa-user mr-2"></i>
            Users
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/admin/rooms" class="nav-link">
            <i class="fas fa-hotel mr-2"></i>
            Rooms
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/admin/booking" class="nav-link">
            <i class="fas fa-save mr-2"></i>
            Bookings
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/admin/payment" class="nav-link">
            <i class="fas fa-money-bill-wave mr-2"></i>
            Payments
          </Link>
        </li>
      </ul>

      {/* <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Saved reports</span>
        <a class="link-secondary" href="#" aria-label="Add a new report">
          <span data-feather="plus-circle"></span>
        </a>
      </h6> */}
    </div>
  );
}

export default Sidebar;
