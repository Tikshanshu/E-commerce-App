import React from 'react'
import Layout from '../../components/layouts/Layout'
import AdminMenu from '../../components/layouts/AdminMenu'

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard-Create Category"}>
         <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3"><AdminMenu/></div>
                <div className="col-md-9">Create Category</div>
            </div>
         </div>
    </Layout>
  )
}

export default CreateCategory;