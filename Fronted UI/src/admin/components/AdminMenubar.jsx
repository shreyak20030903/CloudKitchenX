import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const AdminMenubar = ({toggleSidebar}) => {
  const { logout } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
            <button className="btn btn-primary" id="sidebarToggle" onClick={toggleSidebar}>
                <i className='bi bi-list'></i>
            </button>
            
            <button className="btn btn-outline-danger ms-auto" onClick={handleLogout}>
                <i className="bi bi-box-arrow-right me-1"></i> Logout
            </button>
        </div>
    </nav>
  )
}

export default AdminMenubar;