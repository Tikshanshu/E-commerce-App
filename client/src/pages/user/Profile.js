import React from 'react'
import Layout from '../../components/layouts/Layout'
import UserMenu from '../../components/layouts/UserMenu'

const Profile = () => {
  return (
    <Layout title="Yours Profile">
        <div className="container-fluid m-3 p-3">
            <div className="row">
                <div className="col-md-3"><UserMenu/></div>
                <div className="col-md-9">Profile</div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile
