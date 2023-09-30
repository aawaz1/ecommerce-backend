import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, } from "react-icons/bi";
import Form from "./Auth/Form";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [form , setForm] = useState(false)
  const navigate = useNavigate()
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <button onClick={() => navigate("/form")} className="bg-dark p-2 text-white text-center">CONTACT US</button>
          {form ? <Form/> : ""}
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@intiriousdesignandcollection.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 829973262 , 434556567
          </p>
          {/* <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Contact;