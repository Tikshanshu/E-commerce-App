import React from 'react'
import Layout from '../../components/layouts/Layout'
import UserMenu from '../../components/layouts/UserMenu'

const Orders = () => {
  return (
    <Layout title="Your Orders">
        <div className="container-fluid p-3 m-3">
          <div className="row">
            <div className="col-md-3"><UserMenu/></div>
            <div className="col-md-9">All Orders</div>
            </div>  
        </div>
    </Layout>
  )
}

export default Orders
