import React from 'react'
import Layout from '../components/layouts/Layout'
import {BiMailSend,BiSupport,BiPhoneCall} from "react-icons/bi"
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
    <div className="row contactus ">
      <div className="col-sm-6 ">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col-sm-4">
        <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
        <p className="text-justify mt-2">
          any query and info about product feel free to call anytime we are available 24X7
        </p>
        <p className="mt-3">
          <BiMailSend /> : tikshu7091@gmail.com
        </p>
        <p className="mt-3">
          <BiPhoneCall /> : 8409429323
        </p>
        <p className="mt-3">
          <BiSupport /> : 1800-0000-0000 (toll free)
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default Contact
