import React from 'react';
import { Link } from 'react-router-dom';
import {assets} from '../../assets/assets';

const AdminSidebar = ({sidebarVisible}) => {
  return (
    <div className={`border-end bg-white ${sidebarVisible ? '': 'd-none'}`} id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
            <img src={assets.logo} alt="" height={32} width={32}/><span className="ms-3">Admin!!</span>
        </div>
        <div className="list-group list-group-flush">
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/add">
            <i className='bi bi-plus-circle me-2'></i> Add Food</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/list">
            <i className='bi bi-list-ul me-2'></i> List Food</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/orders">
            <i className='bi bi-cart me-2'></i> Orders</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/admin/messages">
            <i className='bi bi-envelope me-2'></i> Messages</Link>
        </div>
    </div>
  )
}

export default AdminSidebar;