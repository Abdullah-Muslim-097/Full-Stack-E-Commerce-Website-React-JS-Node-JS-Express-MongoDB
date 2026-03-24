import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product from '../../assets/Product_Cart.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <img src={add_product} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
