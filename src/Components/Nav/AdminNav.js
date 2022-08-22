import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/products">
            DJI Cameras
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/products">
            GoPro Cameras
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/products">
            Action Camera Mounts
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/products">
            360 Cameras
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/products">
            Action Camera Add ons
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-danger" to="/admin/products">
            GoPro and Mobile Gimbal
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNav;
