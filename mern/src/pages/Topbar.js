import React from 'react'
import { NavLink } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <NavLink
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
              >
                <i className="fab fa-twitter fw-normal" />
              </NavLink>
              <NavLink
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
              >
                <i className="fab fa-facebook-f fw-normal" />
              </NavLink>
              <NavLink
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
              >
                <i className="fab fa-linkedin-in fw-normal" />
              </NavLink>
              <NavLink
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
              >
                <i className="fab fa-instagram fw-normal" />
              </NavLink>
              <NavLink
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                to=""
              >
                <i className="fab fa-youtube fw-normal" />
              </NavLink>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <NavLink to="#">
                <small className="me-3 text-light">
                  <i className="fa fa-user me-2" />
                  Register
                </small>
              </NavLink>
              <NavLink to="#">
                <small className="me-3 text-light">
                  <i className="fa fa-sign-in-alt me-2" />
                  Login
                </small>
              </NavLink>
              <div className="dropdown">
                <NavLink
                  to="#"
                  className="dropdown-toggle text-light"
                  data-bs-toggle="dropdown"
                >
                  <small>
                    <i className="fa fa-home me-2" /> My Dashboard
                  </small>
                </NavLink>
                <div className="dropdown-menu rounded">
                  <NavLink to="#" className="dropdown-item">
                    <i className="fas fa-user-alt me-2" /> My Profile
                  </NavLink>
                  <NavLink to="#" className="dropdown-item">
                    <i className="fas fa-comment-alt me-2" /> Inbox
                  </NavLink>
                  <NavLink to="#" className="dropdown-item">
                    <i className="fas fa-bell me-2" /> Notifications
                  </NavLink>
                  <NavLink to="#" className="dropdown-item">
                    <i className="fas fa-cog me-2" /> Account Settings
                  </NavLink>
                  <NavLink to="#" className="dropdown-item">
                    <i className="fas fa-power-off me-2" /> Log Out
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
