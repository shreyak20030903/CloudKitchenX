import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddFood from './pages/AddFood/AddFood';
import ListFood from './pages/ListFood/ListFood';
import Orders from './pages/Orders/Orders';
import Messages from './pages/Messages/Messages';
import AdminSidebar from './components/AdminSidebar';
import AdminMenubar from './components/AdminMenubar';
import { ToastContainer } from 'react-toastify';

const AdminLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  return (
    <div className="d-flex" id="wrapper">
      <AdminSidebar sidebarVisible={sidebarVisible} />
      <div id="page-content-wrapper">
        <AdminMenubar toggleSidebar={toggleSidebar} />
        <ToastContainer />
        <div className="container-fluid">
          <Routes>
            <Route path="add" element={<AddFood />} />
            <Route path="list" element={<ListFood />} />
            <Route path="orders" element={<Orders />} />
            <Route path="messages" element={<Messages />} />
            <Route path="" element={<ListFood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;